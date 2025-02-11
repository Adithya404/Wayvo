def add(*args):
    sum=0
    num_list=list(map(int,*args))
    print("Add : ",end="")
    for i in num_list:
        print(f"{i}+",end="")
        sum+=i
    print(f"\b={sum}")   
    
def sub(a,b):
    print(f"Sub : {a}-{b}= {a-b}")     

def mul(*args):
    mul=1
    num_list=list(map(int,*args))
    print("Mul : ",end="")
    for i in num_list:
        print(f"{i}*",end="")
        mul*=i
    print(f"\b={mul}")

def div(a,b):
    if(b==0):
        print("Invalid divisor!")
        return
    print(f"Div : {a}/{b}= {a/b}")

def mod(a,b):
    if(b==0):
        print("Invalid divisor!") 
        return
    print(f"Mod : {a}%{b}= {a%b}")  
    
if __name__ == "__main__":
    print("Welcome to the Calculator")
    while(True):
        print("1.Add\n2.Sub\n3.Mul\n4.Div\n5.Mod\n0.Exit")
        choice=int(input("Enter your Choice: "))
        match choice:
            case 1:
                add(input("Enter the values seperated by space: ").split())
            case 2:
                a=int(input("Enter the 1st no. : "))
                b=int(input("Enter the 2nd no. : "))
                sub(a,b)
            case 3:
                mul(input("Enter the values seperated by space: ").split())
            case 4:
                a=int(input("Enter the 1st no. : "))
                b=int(input("Enter the 2nd no. : "))
                div(a,b)
            case 5:
                a=int(input("Enter the 1st value : "))
                b=int(input("Enter the 2nd value : "))
                mod(a,b)
            case 0:
                print("Good Bye!!")
                break
            case _:
                print("Invalid input try again!")
