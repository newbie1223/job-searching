def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "割る数は0以外を入力してください"

while True:
    # ユーザーに操作を選択させる
    print("選択してください:")
    print("1. 足し算")
    print("2. 引き算")
    print("3. 掛け算")
    print("4. 割り算")
    print("5. 終了")

    choice = input("選択 (1/2/3/4/5): ")

    if choice == '5':
        print("電卓を終了します")
        break

    if choice in ('1', '2', '3', '4'):
        # ユーザーに数値を入力させる
        num1 = float(input("最初の数を入力してください: "))
        num2 = float(input("次の数を入力してください: "))

        if choice == '1':
            print(num1, "+", num2, "=", add(num1, num2))

        elif choice == '2':
            print(num1, "-", num2, "=", subtract(num1, num2))

        elif choice == '3':
            print(num1, "*", num2, "=", multiply(num1, num2))

        elif choice == '4':
            result = divide(num1, num2)
            print(num1, "/", num2, "=", result)

    else:
        print("無効な選択です。1から5の数字を入力してください。")
