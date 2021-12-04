#!/usr/bin/env python
# coding: utf-8

# In[10]:


import pandas as pd
import numpy as np
import matplotlib.pylab as plt

from matplotlib.pylab import rcParams
from statsmodels.tsa.stattools import adfuller
from datetime import datetime
import warnings
warnings.filterwarnings('ignore')
from statsmodels.tsa.seasonal import seasonal_decompose 
from statsmodels.tsa.stattools import acf, pacf
from statsmodels.tsa.arima_model import ARIMA


# In[14]:


def stationarity(timeseries,data):
    
    rolmean=timeseries.rolling(window=12).mean()
    rolstd=timeseries.rolling(window=12).std()
    dftest=adfuller(data['Values'], autolag='AIC')
    dfoutput=pd.Series(dftest[0:4], index=['Test Statistic','p-value','Lags Used','No. of Obs'])
    for key,value in dftest[4].items():
        dfoutput['Critical Value (%s)'%key] = value
    #print(dfoutput)


# In[15]:


def get_predictions(city_name,bedrooms):
    next_months=33
    print("I am getting called")
    print(city_name,bedrooms)
    data=pd.read_csv("City_Zhvi_{}bedroom.csv".format(bedrooms))
   
    myrow=data[data["RegionName"] == "{}".format(city_name)]
    #print(myrow.columns)
    datetime_row=myrow.iloc[:,9:]
    data=pd.DataFrame()
    data["Months"]=list(datetime_row.columns)
    data["Values"]=list(datetime_row.iloc[0,:].values)
    rolmean=data.rolling(window=12).mean()
    rolstd=data.rolling(window=12).std()
    dftest=adfuller(data['Values'], autolag='AIC')
    dfoutput=pd.Series(dftest[0:4], index=['Test Statistic','p-value','Lags Used','No. of Obs'])
    for key,value in dftest[4].items():
        dfoutput['Critical Value (%s)'%key] = value
    data_log=np.log(data["Values"])
    MAvg=data_log.rolling(window=12).mean()
    MStd=data_log.rolling(window=12).std()
    data_log_diff=data_log-MAvg
    data_log_diff=data_log_diff.dropna()
    stationarity(data_log_diff,data)
    exp_data=data_log.ewm(halflife=12, min_periods=0, adjust=True).mean()
    exp_data_diff=data_log-exp_data
    stationarity(exp_data_diff,data)
    data_shift=data_log-data_log.shift()
    data_shift=data_shift.dropna()
    stationarity(data_shift,data)
    data_log_df=pd.DataFrame(data_log,columns=["Values","Months"])
    data_log_df["Months"]=pd.to_datetime(data["Months"])
    data_log_df = data_log_df.set_index('Months')
    decomp=seasonal_decompose(data_log_df)


    trend=decomp.trend
    seasonal=decomp.seasonal
    residual=decomp.resid
    decomp_data=residual
    decomp_data=decomp_data.dropna()
    stationarity(decomp_data,data)
    lag_acf=acf(data_shift, nlags=20)
    lag_pacf=pacf(data_shift, nlags=20, method='ols')
    data_shift_df=pd.DataFrame(data_shift,columns=["Values"])
    model=ARIMA(data_log, order=(2,1,2))
    results=model.fit(disp=-1)
    predictions=pd.Series(results.fittedvalues, copy=True)
    predictions_cum_sum=predictions.cumsum()
    predictions_log=pd.Series(data_log_df.iloc[0], index=data_log.index)
    predictions_log=predictions_log.add(predictions_cum_sum,fill_value=0)
    predictions_ARIMA=np.exp(predictions_log)
    rcParams['figure.figsize']=20,10
    x=results.forecast(steps=next_months)
    final=[float("{:.2f}".format(i)) for i in np.exp(x[0])]
    
    return final[-13:]





# In[16]:


#print(get_predictions("San Jose",1,12))


# In[ ]:




