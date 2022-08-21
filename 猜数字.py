from random import randint


num_2 = ""
while num_2 != "q" or num_2 != 'Q':
    print("tip:输入'q'可退出游戏\n")
    num_1 = randint(1, 99)
    num_2 = ""
    time = 0

    while num_1 != num_2 and (num_2 != "q" or num_2 != 'Q'):
        num_2 = input(f"--第{time + 1}轮--\t请输入数字：\t")
        time = time + 1

        if num_2 == 'q' or num_2 == 'Q':
            break
        elif num_1 > int(num_2):
            print("\t\t猜小了\n")
        elif num_1 < int(num_2):
            print("\t\t猜大了\n")
        else:
            print(f"恭喜，{num_1}是正确数字！您一共猜了{time}次\n")
            break

    num_2 = str(input("再来一局?(y/n)\t"))
    if num_2 == "y":
        continue
    if num_2 == "n":
        break
