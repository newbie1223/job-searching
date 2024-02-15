# coding : utf-8
from wordcloud import WordCloud

text_file = open("speech.txt")
bindata = text_file.read()
txt = bindata

wordcloud = WordCloud(background_color = "white",font_path = "/usr/share/fonts/truetype/ttf-khmeros-core/KhmerOS.ttf",width = 800,height = 600).generate(txt)
wordcloud.to_file("./make_image/sample_one.png")