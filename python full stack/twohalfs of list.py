l=[1,2,3,4,2,0]
s=m=0
k=len(l)//2
firsthalf=l[:k]
secondhalf=l[k:]
for i in firsthalf:
    s+=i 
for i in secondhalf:
    m+=i
print("Hii" if s==m and s%2==0 else"Bye")



