import vk_api
from vk_api.bot_longpoll import VkBotLongPoll, VkBotEventType
from vk_api.keyboard import VkKeyboard, VkKeyboardColor



vk_session = vk_api.VkApi(token='8296bebbedd789e3496949ddf5fc904fb4ad361e407858469e5e8353f57c88246c43ed7e9602e1200c278') #токен вашей группы
vk = vk_session.get_api()
longpoll = VkBotLongPoll(vk_session,197468523) #цифровой id вашей группы
def main():

	keyboard1 = VkKeyboard(one_time=False) # False - клавиатура после нажатия не будет закрываться. True - будет.

	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.POSITIVE)	
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.POSITIVE)
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.POSITIVE)
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.POSITIVE)
	keyboard1.add_line() 
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.POSITIVE)	
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.POSITIVE)
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.POSITIVE)
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.POSITIVE)
	keyboard1.add_line() 
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.NEGATIVE)	
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.NEGATIVE)
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.NEGATIVE)
	
	keyboard1.add_button('https://vk.com/game_bot_animania', color=VkKeyboardColor.NEGATIVE)			

	while True: 
		try: 
			for event in longpoll.listen():

				if event.type == VkBotEventType.MESSAGE_NEW:
					print("Привет")
					while True:
						vk.messages.send(peer_id=event.object.peer_id, message="Вас рейдят, ребятки) Подписывайтесь на бота",keyboard=keyboard1.get_keyboard(), random_id=0)	
					
			
		except Exception as e:
			print('') 

if __name__ == '__main__':
	main()
