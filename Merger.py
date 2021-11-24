{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "9249be99",
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas as pd"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "5b037163",
   "metadata": {},
   "outputs": [],
   "source": [
    "maindf=pd.read_csv(\"City_Zhvi_1bedroom.csv\")\n",
    "\n",
    "\n",
    "for i in range(2,6):\n",
    "    pd.read_csv(\"City_Zhvi_{}bedroom.csv\".format(i))\n",
    "    pd.concat([s1, s2], ignore_index=True)\n",
    "    "
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.8"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
