import random
game=["rock","paper","scissors",]
def main():
    win=0
    lose=0
    tie=0
    while True:
        computer = random.choice(game)
        player=input("Now your turn! choose rock,paper,scissors: ").lower()
        if player==computer:
            print("game tie! both chose:",computer)
            tie+=1
        elif player=="rock":
            if computer=="paper":
                print("you lose! computer choose: ",computer) 
                lose+=1
            else:
                print("you win! computer choose: ",computer)
                win+=1
        elif player=="paper":
            if computer=="scissors":
                print("you lose! computer choose:",computer)
                lose+=1
            else:
                print("you win! computer choose: ",computer)
                win+=1
        elif player=="scissors":
            if computer=="rock":
                print("you lose! computer choose:",computer)
                lose+=1
            else:
                print("you win! computer choose: ",computer)
                win+=1
        else:
            print("invalid input")
        choice=input("do you want to play again? (yes/no): ").lower()
        if choice=="no":
            print("Thanku for playing! Have a nice day!")
            break
    print("you win:",win)
    print("you lose:",lose)
    print("game tie:",tie)    
main()
