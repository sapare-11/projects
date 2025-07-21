def lucky_name(names):
    vow= "aeiou"
    if len(names)==10:
        for name in names:
            if name[0].lower() in vow and name[-1].lower() in vow:
                print(name)
    else:
        priint("Enter only 10 names")
    names=input("Enter 10 names").split()
lucky_name(names)