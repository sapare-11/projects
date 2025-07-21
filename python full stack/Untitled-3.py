l=[1,2,3,4, "hello", "Mom","dad",True, False,0,1]
ls=[]
lb=[]
li=[]
for val in l:
    if type(val)==str:
        if val==val[::-1]:
            ls.append(val)
    elif isinstance(val,int):
        if val%2==0:
            li.append(val)
    elif type(val)==bool:
        if val==True:
            lb.append(val)
            
            print(li,ls,lb)