#!/usr/bin/env python
# coding: utf-8

# In[2]:


from flask import Flask, jsonify, request
from remote_functional_script import get_predictions
from flask_cors import CORS, cross_origin

# In[3]:
app= Flask(__name__)
cors = CORS(app)



# In[4]:



@app.route("/", methods=["GET","POST"])
def predict():
    if request.method=='GET' or request.method=='POST':
        data=request.get_json()
        print(data)
        current=float(data["current_value"])
        print(data)
        data=list(get_predictions(data["city"], data["bedRooms"]))
        print("completed the request",type(data[0]),type(current))
        
        factor=current/data[0]
        newdata=[x*factor for x in data]
        
        return jsonify(newdata[1:])


# In[6]:


#  main thread of execution to start the server
if __name__=='__main__':
    app.run(host="127.0.0.1",port=5555)


# In[ ]:




