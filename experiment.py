# -*- coding: utf-8 -*-
"""
Created on Thu Nov 25 20:51:55 2021

@author: Checkout
"""

from remote_functional_script import get_predictions

data=get_predictions("San Jose", 1)
current_price=700000
print(data)
factor=current_price/data[0]
newdata=[x*factor for x in data]
print(newdata)