# coding : utf-8
from wordcloud import WordCloud

# text_file = open("./speech.txt")
# bindata = text_file.read()
# txt = bindata
txt = WordCloud.__doc__
wordcloud = WordCloud(font_path = "/usr/share/fonts/truetype/noto/NotoSansMono-Regular.ttf",width = 800,height = 600)
wordcloud.generate(txt)
wordcloud.to_file("./make_image/sample_one.png")