# Team-Project-5

1. **California forest fire prediction**


Introduction:
Over the last few years, California is facing a huge natural threat from wildfires. Millions of acres of land burnt in days. This has led to unprecedented environmental and economical damages. In this project, we will try to predict if the area is prone to forest fires based on various environmental factors such as windspeeds, humidity level, minimum and maximum temperatures, and many more.

Abstract:
Over the last few years, California is facing a huge natural threat from wildfires. Millions of acres of land burnt in days. This has led to unprecedented environmental and economical damages. Through this project, we wish to predict if the area is under forest fire threat. We wish to collect data from various resources like weather forecast historical data from news channels datasets. This data will be cleaned, processed, and used to train machine learning models exploiting time value analysis techniques. If the model performs well, on test data, the model can be fed live data for real-time monitoring and forecasting.

Approach:
1) Data will be collected from several secure and verified sites.
2) More data has to be collected for each county, having parameters like air quality, its constituents, humidity, temperatures, and much more
3) Data will be cleaned for outliers, noise cancellation, dimensionality reduction(if needed), and for missing values 
4) Machine learning models would then be trained for the collected dataset
5) Trained models would be then used for predictions.
6) Accuracy would be calculated of the trained models using real-time and testing datasets.

Persona:


This project is intended to help the State of California fight this crisis. Hence it's targeted to be used by California state authorities and the US government.


Dataset links:
https://catalog.data.gov/dataset/large-fire-perimeters-5000-acres
https://catalog.data.gov/dataset/small-fire-perimeters-5000-acres
https://www.timeanddate.com/weather/usa/chico/historic?month=11&year=2018





2.**Stocks Reader**

Introduction :

Stocks and shares enthusiasts often face difficulties of reading the trajectories of the stocks before and after they invest. This void must be filled by an application that shall monitor these trajectories to give a user better perspective before/after investing.

Abstract:

The stock market gives investors an opportunity to share in the profits of major corporations. While stocks can be risky, they also provide small and large investors the opportunity to gain wealth. Given the opportunistic trading strategies that sophisticated investors use, professional investors can generate wealth even through changing market cycles. 

These strategies are based on legacy data of a stock and current mood of the market. To assist and bolster efforts ‘Stocks Reader’ can be an efficient tool. Fast , reliable and hands on access to legacy data along with measure of growth expected, can induce a sense of assurance also in a naive investor.


Approach:
1. Data shall be fetched from several reliable sites for the corresponding companies.
2. Machine Learning algorithms will be run to predict the trajectory.
3. Legacy data of each stock will also be displayed.

Persona:

Projected is targeted at a common user who has a web access.

DataSet Links : https://www.kaggle.com/uciml/istanbul-stock-exchange





3.**Place Safety Prediction**

Introduction to the problem statement:

California homicides jump 31% in 2020, reaching highest total in 13 years. Besides homicide incidents, there are lot of incidents reported related to mugging especially in downtown areas. It is very important for general public to have a fair estimation about the safety of a location before a visit.

Abstract:

Our web-application will solve this problem by providing users a dashboard with previous year statistics and a risk prediction based on previous years’ crime statistics, time of the day, crowd density. Crowd density is calculated using video surveillance footage fed to backend servers. The servers will use python models to count the number of people in a given location. This data along with other crime statistics will give predictions to users. This will help users to avoid going to high-risk areas at a particular time of the day. 

Approach:

1.	Video surveillance data will be collected from multiple sources and it is processed to count number of people in any given area.
2.	The model then will predict whether the location is crowded, less-crowded or deserted.
3.	Using the previous years’ crime statistics, time of the day, based on the crowd density, ML model will predict the risk of going to that location.
4.	Front end web application will be developed to present users with a dashboard to see the risk predictions and previous years’ data to make an informed decision.

Persona:

General public

  
Dataset links:
https://data.world/health/violent-crime-rate-california/workspace/file?filename=rows.csv
https://www.kaggle.com/fbi-us/california-crime
https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/tables/table-8/table-8-state-cuts/california.xls
