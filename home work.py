# # # # # # # # # a = int(input("Введите день рождение:"))
# # # # # # # # # b = int(input("Введите месяц рождение:"))
# # # # # # # # # if a >= 21 and b == 3 or a <= 20 and b == 4:
# # # # # # # # #     print("Овень")
# # # # # # # # # elif  a >= 21 and b == 4 or a <= 21 and b == 5:
# # # # # # # # #     print("Телец")
# # # # # # # # # if a >= 22 and b == 5 or a <= 21 and b == 6:
# # # # # # # # #     print("Близнецы")
# # # # # # # # # elif a >= 22 and b == 6 or a <= 22 and b == 7:
# # # # # # # # #     print("Рак")
# # # # # # # # # if a >= 23 and b == 7 or a <= 21 and b == 8:
# # # # # # # # #     print("Лев")
# # # # # # # # # elif a >= 22 and b == 8 or a <= 23 and b == 9:
# # # # # # # # #     print("Дева")
# # # # # # # # # if a >= 24 and b == 9 or a <= 23 and b == 10:
# # # # # # # # #     print("Весы")
# # # # # # # # # elif a >= 24 and b == 10 or a <= 22 and b == 11:
# # # # # # # # #     print("Скорпион")
# # # # # # # # # if a >= 23 and b == 11 or a <= 22 and b == 12:
# # # # # # # # #     print("Стрелец")
# # # # # # # # # elif a >= 23 and b == 12 or a <= 20 and b == 1:
# # # # # # # # #     print("Козерог")
# # # # # # # # # if a >= 21 and b == 1 or a <= 19 and b == 2:
# # # # # # # # #     print("Водолей")
# # # # # # # # # elif a >= 20 and b == 2 or a <= 20 and b == 3:
# # # # # # # # #     print("Рыбы")

# # # # # # # # exam1 = int(input("Алгебра:"))
# # # # # # # # exam2 = int(input("Руский Язык:"))
# # # # # # # # exam3 = int(input("Физика:"))
# # # # # # # # total = exam1 + exam2 + exam3
# # # # # # # # if total >= 270:
# # # # # # # #     print("Бюджеть")
# # # # # # # # else:
# # # # # # # #     print("Контракт") 

# # # # # # # m = int(input("Введите месяц:"))
# # # # # # # if m in (12, 1, 2):
# # # # # # #     print("Зима")
# # # # # # # elif m in (3, 4, 5):
# # # # # # #     print("Весна")
# # # # # # # elif m in (6, 7, 8):
# # # # # # #     print("Лето")
# # # # # # # elif m in (9, 10, 11):
# # # # # # #     print("Осень")
# # # # # # # else:
# # # # # # #     print("такого месяца нет!") 
# # # # # # x = int(input("Введите значения x: " ))
# # # # # # if x > 0:     y = x
# ########  elif x <= 0:
#     # y = x ** 2
#     # print("y =", y)
f = int(input("Введите время:"))
if f >= 0 and f <= 5:
      print("Ночь")
elif f >= 6 and f <= 11:
     print("Утро")
if f >= 12 and f <= 17:
      print("День")
elif f >= 18 and f <= 23:
      print("Вечер")


    



