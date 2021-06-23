var tipuesearch = {"pages": [{'title': 'about', 'text': '四設計二甲 \n 40823110 張昀棨 \n \n cd2021 \n 個人倉儲: github \n 團隊網站:   stage1-ag21 \n stage1-ag21 (備用) \n 團隊倉儲:   stage1-ag21 (主) \n stage1-ag21(備用) \n \n \n   Next  >> W1-W4 \n', 'tags': '', 'url': 'about.html'}, {'title': '每周學習進度', 'text': '\n', 'tags': '', 'url': '每周學習進度.html'}, {'title': 'W3進度', 'text': 'onshape 零件圖 \n 軸承零件 \n https://cad.onshape.com/documents/0bfc2dc1ec6f4ab23ac54ffe/w/0dfb2b29b00da67b3c1974c6/e/0de22abfa577bb4913cc1c05 \n 引球員盤 \n https://cad.onshape.com/documents/0e376e65b8e53e50798db3f8/w/38fdbe7da426bcea827d31f5/e/c8220b94c818dc32174f27da \n 主體 \n https://cad.onshape.com/documents/6b80403679e6d564d3030ea0/w/e8e6dda875cffa2431ab0d92/e/adac81874f58c0e7f7c82a05 \n 底座+球桶 \n https://cad.onshape.com/documents/e7f83d8dad44353fefca9ba8/w/c9bfde151271f69c6a6a2b1d/e/dfcfbb7a2da4266f925ff71c \n 組合圖 \n https://cad.onshape.com/documents/5163181e2fe649a1d31dd674/w/4e88bfbfabd294ec7f2f2b4d/e/58709a4788fea2051cd57dec \n', 'tags': '', 'url': 'W3進度.html'}, {'title': 'W4進度', 'text': '', 'tags': '', 'url': 'W4進度.html'}, {'title': 'ssh', 'text': 'SSH 指 Secure SHell, 是一種網路連線加密機制, 當我們在 Mac OS 或 Linux 操作系統中的 Terminal 或 XTerm 時, 可以利用 ssh 帳號@遠端主機 ip 或符號名稱, 就可以輸入認證密碼, 登入到遠端主機. \n 一般針對公開的 Github 倉儲, 任何人都可以直接透過 https 協定 clone 倉儲, 無需認證, 但是倉儲協同者若要從近端將改版資料送到 Github, 就必須通過認證, 假如採 https 協定, 則倉儲協同者在推送改版資料時, 必須提供帳號與密碼. \n 除了 https 協定, Github 也接受倉儲的協同者以 SSH 連線的方式, git clone private 倉儲, 或以 SSH 連線的方式將近端改版資料推送到遠端倉儲. \n SSH 的連線加密機制依賴 private key 與 public key 之間的配對, 當使用者建立 SSH key pair 時, private key 必須保護在近端, 而 public key 則必須送到進行認證的遠端伺服器中. \n 建立 OpenSSH key pair \n Github 伺服器所支援的 SSH 為 OpenSSH 檔案格式的協定, 因此使用者要送到 Github 伺服器上的 OpenSSH 格式 public key, 可以透過 portablegit 中的 sh.exe 進入 SHell, 然後利用以下指令建立採  rsa  加密演算法的 key pair: \n ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 在 -C 後的使用者學號字串, 會直接附加在 OpenSSH public key 檔案的最後端, 讓使用者得以辨識 public key 的對應使用者, 而所建立的 OpenSSH private key 則可以透過 puttygen 轉換為 putty 特有檔案格式. \n Putty 作為 SSH 連線客戶端工具 \n Putty 套件可用於 Windows 與 Linux 操作系統, 可以讓使用者以 SSH 加密機制遠端登入到其他伺服器主機, 由於電腦輔助設計室電腦的第三磁區上課時會轉為純 IPv6 協定上網, 當使用者要將近端改版資料推送到遠端時, 由於 Github 至今仍只支援 IPv4 網路協定, 因此無論是以 https 或 ssh 方式連線, 都必須透過能同時支援 IPv4 與 IPv6 的代理主機. \n 以 https 協定對 Github 連線的代理主機設定位於 home/.gitconfig, 而在 Windows 10 操作系統中採 SSH 對 Github 連線, 就必須將代理主機與 private key 的設定, 透過 Putty 完成. \n 以 SSH 協定與 Github 連線 \n 1. 建立一對 OpenSSH key pair, private key 保留在近端, 將 public key 登記在 Github 所屬帳號設定中. \n 2. 近端可攜系統啟動時, 必須確認已經設定 \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n 表示 git 將透過 putty 工具以 ssh 加密協定對 Github 連線 \n 3. 在 Putty 中設定對 github.com ssh 時必須提供的 Proxy 代理主機設定與 Auth 認證所需的近端 private key, 而且必須利用 puttygen 將 OpenSSH 格式轉為 putty 檔案格式 \n 4. 無論在 git clone 或 git push (URL 位於倉儲 .git/config 中), URL 必須使用  git@github.com:帳號/倉儲名稱.git  連線 \n 利用 SSH 對 Gitlab 連線 \n \n 首先必須要將 OpenSSH 格式的 public key 登錄到 Gitlab 帳號下 \n 確定已經利用 putty.exe 建立 session 名稱為 gitlab.com 的設定, 其中設定 AUTH 與 Proxy 資料 \n 修改各倉儲中 .git/config 的 gitlab remote add 設定, 以 url = git@gitlab.com:user_name/url 對 gitlab 連接. \n \n \n Network <<  Previous   Next  >> OpenSSH \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n  啟用 LaTeX equations 編輯  \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script> \n \n', 'tags': '', 'url': 'ssh.html'}, {'title': '更新cmsimde', 'text': '進到cmsimde檔案裡輸入下指令合併更新版本 \n git pull\n \n \n 到up_dir複製一分到cd2021合併資料即可更新完成 \n 接著在命令列輸入cms檢查是否更新完成 \n 若成功將會執行 python wsgi.py \n', 'tags': '', 'url': '更新cmsimde.html'}, {'title': 'w5', 'text': '', 'tags': '', 'url': 'w5.html'}, {'title': '產品目標', 'text': '主題:籃球機 二代 \n \n 動機: \n 第一次小組產品的籃球機只能自己轉動無法控制，所以二代的籃球機目標增加案件控制轉動。 \n \n 製作規劃: \n w5:確認主題，工作分配 \n \n w6:尋找lua程式與 coppeliaSim 文章 ，並且使用lua程式控制軸在coppeliaSim裡模擬，籃球機外觀修整。 \n \n w7:完成按鍵控制程式與模擬 ，籃球機外觀修整。 \n \n w8:除錯與修整，完成簡報與pdf \n \n w9:報告 \n', 'tags': '', 'url': '產品目標.html'}, {'title': '工作分配', 'text': '40823152:coppeliaSim 模擬 ，程式設計，尋找資料 \n 40822310: 程式設計，尋找資料 \n 40823125:機構設計，尋找資料，簡報製作，heroku創建 \n 40823153:Inventor 畫圖 ， coppeliaSim 模擬 \n', 'tags': '', 'url': '工作分配.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'Lua資料', 'text': "使用lua控制軸的轉速 \n function sysCall_init()\n    -- do some initialization here\n     joint=sim.getObjectHandle('Revolute_joint')\n     sim.sJointTargetVelocity(joint,5.5) \n 介紹: \n 1. 設joint 為轉軸 \n \t\njoint=sim.getObjectHandle('Revolute_joint') \n 2.設 joint\xa0的 速度 \n 呼叫對話框參考資料 \n https://www.coppeliarobotics.com/helpFiles/en/regularApi/simGetDialogInput.htm \n https://www.coppeliarobotics.com/helpFiles/en/regularApi/simGetDialogResult.htm \n https://www.coppeliarobotics.com/helpFiles/en/regularApi/simDisplayDialog.htm \n \n \n \n", 'tags': '', 'url': 'Lua資料.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'keyboard control', 'text': "使用keyboard \xa0控制軸的啟動 \n lua程式碼 \n function sysCall_init()\n    -- do some initialization here\n     joint=sim.getObjectHandle('Revolute_joint')\n     sim.sJointTargetVelocity(joint,5.5)\n     number=-10\n      \n      \n  \n \n \nend\n \nfunction sysCall_actuation()\n message,auxiliaryData=sim.getSimulatorMessage()\n if (message==sim.message_keypress) then\n      if (auxiliaryData[1]==2007) then\n      sim.setJointTargetVelocity(joint,number)\n      end\n      if (auxiliaryData[1]==2008) then\n      sim.setJointTargetVelocity(joint,0)\n      end\n end   \n \n \nend \n 1.定義2個參數為sim.getSimulatorMessage() \n \t\nmessage,auxiliaryData=sim.getSimulatorMessage() \n 2.當參數為鍵盤up按鍵，使軸轉number的速度 \n if (message==sim.message_keypress) then\n     if (auxiliaryData[1]==2007) then\n     sim.setJointTargetVelocity(joint,number)\n     end\n \n \n <h2>w8</h2> \n <h3>basketball Machine 2.4.3</h3> \n \n", 'tags': '', 'url': 'keyboard control.html'}, {'title': 'w8', 'text': '', 'tags': '', 'url': 'w8.html'}, {'title': 'basketball Machine 2.4.3', 'text': '1.擊球桿新增後轉功能，可以有效控制擊球的時機 \n \n \n Inquire keyboard number <<  Previous   Next  >> stage1-product \n', 'tags': '', 'url': 'basketball Machine 2.4.3.html'}, {'title': 'W11進度', 'text': '', 'tags': '', 'url': 'W11進度.html'}, {'title': 'task1', 'text': 'stage3-ag1 repo  |  stage3-ag1 site \n \n 40823131 repo  |  40823131 site \n a40823112 repo  |  a40823112 site \n 40823123 repo  |  40823123 site \n 40823145 repo  |  40823145 site \n 40823136 repo  |  40823136 site \n 40823109 repo  |  40823109 site \n 40823116 repo  |  40823116 site \n 40823108 repo  |  40823108 site \n \n stage3-ag2 repo  |  stage3-ag2 site \n \n 40823151 repo  |  40823151 site \n 40623121 repo  |  40623121 site \n 40871106 repo  |  40871106 site \n 40823102 repo  |  40823102 site \n 40823104 repo  |  40823104 site \n 40823106 repo  |  40823106 site \n 40823101 repo  |  40823101 site \n 40823132 repo  |  40823132 site \n \n stage3-ag3 repo  |  stage3-ag3 site \n \n 40823119 repo  |  40823119 site \n 40823150 repo  |  40823150 site \n 40823103 repo  |  40823103 site \n 40823107 repo  |  40823107 site \n 40523252 repo  |  40523252 site \n 40823154 repo  |  40823154 site \n \n stage3-ag4 repo  |  stage3-ag4 site \n \n 40823142 repo  |  40823142 site \n 40823144 repo  |  40823144 site \n 40823127 repo  |  40823127 site \n 40823148 repo  |  40823148 site \n 40823121 repo  |  40823121 site \n 40823135 repo  |  40823135 site \n 40823114 repo  |  40823114 site \n 40823146 repo  |  40823146 site \n \n stage3-ag5 repo  |  stage3-ag5 site \n \n 40823111 repo  |  40823111 site \n 40823115 repo  |  40823115 site \n 40823128 repo  |  40823128 site \n 40823120 repo  |  40823120 site \n 40823140 repo  |  40823140 site \n 40823124 repo  |  40823124 site \n 40823139 repo  |  40823139 site \n 40823126 repo  |  40823126 site \n \n stage3-ag6 repo  |  stage3-ag6 site \n \n 40823152 repo  |  40823152 site \n 40823110 repo  |  40823110 site \n 4823122 repo  |  4823122 site \n 40823125 repo  |  40823125 site \n 40823117 repo  |  40823117 site \n 40823129 repo  |  40823129 site \n 40823149 repo  |  40823149 site \n 40823153 repo  |  40823153 site \n \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task1-program', 'text': 'with open("stage3_2a.txt") as fh:\n   #先將我們存起來stage3_2a.txt打開並命名為fh\n    data = fh.readlines()\n    #讀取stage3_2a.txt裡的多資料行並存為data裡  這邊如果使用readline 就會變成讀取一行\n#print(len(data)) \n#輸出為6  \nfor i in range(len(data)):\n    #print(data[i])\n    #i會從[0,1,2,3,4,5]依序執行\n    data1 = data[i].replace(\'40823112\',\'a40823112\',1)\n    #print(data1)\n    #因為40823122的學號打錯了,所以用 replace 把舊的替換成新的\n    data2 = data1.replace(\'\\t\\t\',\'\')\n    print(data2)\n    #因為有一組只有6人,所以用 replace 把空位刪除\n    data3 = data2.replace(\'_\',\'-\')\n    #因為在編輯txt的時候-會變成_,所以用 replace 把_修正為-\n    group =data3.rstrip("\\n").split("\\t")\n    #print(group)   \n    print(\'<p><a href="https://github.com/\'+group[1]+\'/\'+group[0]+\'">\'+group[0]+\' repo</a> | <a href="https://\'+group[2]+\'.github.io/\'+group[0]+\'">\'+group[0]+\' site</a></p>\')\n    print("<p></p>")\n    #break\n    #使用break讓迴圈執行一次終段查看輸出的值\n    #先取出newdata list中的第i項,消除元素中/n,再以\\t取出需要的文字\n\n    for j in range(1,18,2):\n    #設一個範圍,(1到18,每次+2,1<=j<18)\n        try:\n            n = group[j]#.replace(\'40823112\',\'a40823112\')\n            #因為40823112的github帳號是a40823112,所以用 replace 把帳號修正\n            print(\'<p>\'+\'<a href="https://github.com/\'+n+\'/cd2021">\'+n+\' repo</a> | <a href="https://\'+n+\'.github.io/cd2021">\'+n+\' site</a></p>\')\n        except:\n           continue\n    print("<p></p>")\n        #這邊使用try.....except,因為有一組6個人,導致有空格,所以需要用continue讓迴圈繼續跑 \n \n', 'tags': '', 'url': 'task1-program.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'robotdk影片', 'text': '\n', 'tags': '', 'url': 'robotdk影片.html'}, {'title': 'what is xml', 'text': '\n XML stands for eXtensible Markup Language\xa0 \xa0 \xa0\xa0 \n XML is a markup language much like HTML\xa0 \xa0 \xa0 \xa0\xa0 \n XML was designed to store and transport data\xa0 \xa0 \n XML was designed to be self-descriptive\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n XML is a W3C Recommendation\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 簡單來說就是將文件做好整理給不同設備讀或人讀取資料 \n \n \n \n STL 轉 XML網址 \n https://sendeyo.com/onlineconverter/en/stl/xml \n \n', 'tags': '', 'url': 'what is xml.html'}, {'title': 'w15', 'text': '', 'tags': '', 'url': 'w15.html'}, {'title': 'using algebra', 'text': "Here we have the same two link robot as we just looked at but this time we're going to solve it using an analytical approach, that is we're going to rely much more on algebra, particular linear algebra rather than geometry. \n 在這裡，我們有與剛才看到的相同的二連桿機構，但這次我們將使用分析方法來解決它，也就是說，我們將更多地依賴代數，特定的線性代數而不是幾何。 \n \xa0 \n We have an expression E, which is the homogeneous transformation which represents the pose of the robots endefector and we looked at this in the last lecture, we can write the endefector pose as a sequence of elementary homogeneous transformations. \n 我們有一個表達式 \xa0 E ，它是表示機械手臂位置的齊次變換，我們在上一課中看過這個，我們可以將機械手臂位置寫為一系列基本齊次變換。 \n \xa0 \n A rotation by Q1, a translation along the X direction by A1, a rotation by Q2 and then a translation in the X direction by A2. \n Q1 旋轉， A1 沿 x 方向平移， Q2 旋轉，然後 A2 沿 x 方向平移。 \n \xa0 \n If I expand this out, multiply all the transformations together, I get the expression shown here ; a three by three homogeneous transformation matrix representing the pose of the robot's endefector. \n 如果我將其展開，將所有變換相乘，就會得到此處所示的表達式；一個三乘三的齊次變換矩陣，表示機械手臂的最終位置。 \n \xa0 \n Now for this particular two link robot , we are only interested in the position of its endefector , it's X and Y co - ordinate and they are these two elements within the homogeneous transformation matrix , so I'm going to copy those out . \n 現在對於這個特殊的二連桿機構，我們只對它機械手臂的位置感興趣，它是 x 和 y 坐標，它們是齊次變換矩陣中的這兩個元素，所以我將把它們複製出來。 \n \xa0 \n So here again is our expression for X and Y and what we're going to do is a fairly common trick , we're going to square and add these two equations and I get a relationship that looks like this . \n 所以這裡又是我們對 x 和 y 的表達式，我們要做的是一個相當常見的技巧，我們要平方並添加這兩個方程，我得到一個看起來像這樣的關係式。 \n \xa0 \n Now I can solve for the joint angle Q2 in terms of the endefector pose X and Y and the robot's constants A1 and A2. \n 現在我可以根據機械手臂位置 x 和 y 以及機器人的常數 A1 和 A2 來求解節點角度 Q2 。 \n \xa0 \n Now what I'm going to do is apply the sum of angles identity . \n 現在我要做的是應用角度之和的特性。 \n \xa0 \n I'm going to expand these terms, sine of Q1 plus Q2 or cos of Q1 plus Q2 and to make life a little bit easier, I'm going to make some substations, so where ever I had cos Q2, I'm going to write C2 and where ever I had sine Q2, I'm going to write S2. \n 我將展開這些項， Q1 的正弦加 Q2 或 Q1 的 cos 加 Q2 ，為了讓生活更輕鬆一點，我將建立一些部份，所以只要有 cos Q2 ，我就會去取代 C2 並且在我有 sinQ2 \xa0 的地方，取代為 S2 。 \n \xa0 \n It's a fairly common shorthand when people are looking at robot kinematic equations. And here are the equations after making those substitutions. \n 當人們解決機器人運動學方程時，這是一個相當常見的快速記法。這是進行這些替換後的方程式。 \n \xa0 \n Looking at these two equations, I can see that they fall into a very well known form and for that form there is a very well known solution. \n 看看這兩個方程，我可以看到它們屬於一個眾所周知的形式，對於這種形式，有一個眾所周知的解決方案。 \n \xa0 \n So I'm going to consider just one of the equations, the equation for Y and using our well known identity and it's solution, I can determine the values for the variables little a, little b and little c and once l've determined those, then I can just write down the solution for Q1, which x is the equivalent of theta in this particular case. \n 所以我將只考慮其中一個方程式， Y ，使用我們眾所周知的恆等式和它的解，我可以確定變量 a 、 b 、 c \xa0 的值，一旦我確定了這些，然後我可以寫下 Q1 的解決方案，在這種特殊情況下， x 相當於θ。 \n \xa0 \n Here again is our expression for Q1, copied over from the previous slide and we may remember from earlier in our workings that we determined this particular relationship; X squared plus Y squared is equal to this particular complex expression. \n 這裡再次是我們對 Q1 的表達式，從上一張幻燈片複製過來，我們可能還記得在我們工作的早期，我們確定了這種特殊關係； X 2 加 Y 2 等於這個特定的複雜表達式。 \n \xa0 \n So I can substitute that in and do some simplification and I end up with this slightly less complex expression for Q1. \n 因此，我可以將其替換並進行一些簡化，最終得到Q1的這個稍微不那麼複雜的表達式。 \n \xa0 \n And it is the same expression that I got following the geometric approach in the previous section. \n 這與我在上一節中遵循幾何方法得到的表達式相同。 \n", 'tags': '', 'url': 'using algebra.html'}, {'title': 'using geometry', 'text': 'We saw this simple two-link robot in the previous lecture about forward kinematics. \n 我們在上一堂關於正向運動學的講座中看到了這個簡單的二連桿機構。 \n \xa0 \n The tooltip pose of this robot is described simply by two numbers, the coordinates x and y with respect to the world coordinate frame. \n 該機構的工具提示姿態由兩個數字簡單描述，相對於世界的坐標系的坐標的X和Y。 \n \xa0 \n So, the problem here is that given x and y, we want to determine the joined angles, q1 and q2. \n 所以，這個問題在這裡是給定 x 跟 y ，我們想要求出這個節點的角度 q1 跟 q2 。 \n \xa0 \n The solution that we’re going to follow in this particular section is a geometric one. \n 這節我們將遵循這個特別的幾何方法來解決。 \n \xa0 \n We’re going to start with a simple piece of construction. \n 我們將從一個簡單的結構開始。 \n \xa0 \n We’re going to overlay the red triangle on top of our robot. \n 我們將一個紅色的三角形覆蓋在機構上。 \n \xa0 \n We know that the end point coordinate is x, y, so the vertical height of the triangle is y, the horizontal width is x. \n 我們知道結束的點坐標是x跟y，所以三角形的垂直距離是y，水平距離是x。 \n \xa0 \n And, using Pythagoras theorem, we can write r squared equals x squared plus y squared. \n 然後，利用畢氏定理，我們可以寫出 r 2 \xa0 = x 2 \xa0 +y 2 。 \n \xa0 \n So far, so easy. \n 到這裡很容易。 \n \xa0 \n Now, we’re going to look at this triangle highlighted here in red and we want to determine the angle alpha. \n 現在，我們開始看到這個以紅色突出顯示的三角形然後我們想確定α角。 \n \xa0 \n In order to do that, we need to use the cosine rule. \n 為了做到這點，我們需要用到餘弦定理。 \n \xa0 \n And, if you’re a little rusty on the cosine rule, here is a bit of a refresher. \n 如果你對餘弦定理有點生疏，這裡有一點複習。 \n \xa0 \n We have an arbitrary triangle. \n 我們有任意一個三角形。 \n \xa0 \n We don’t have any right angles in it and we’re going to label the length of this edge as A and the angle opposite that edge, we’re going to label as little a. \n 我們沒有任何直角，我們將這條邊的長度標記為 A，而與該邊相對的角度，我們將標記為小 a。 \n \xa0 \n And, we do the same for this edge and this angle, and this edge and this angle. \n 並且，我們對這條邊和這個角，以及這條邊和這個角做同樣的事情。 \n \xa0 \n So, all together, the sides are labelled capitals A, B and C, and the angles are labelled little a, little b, and little c. \n 因此，所有邊都標記為A、B、C，角標記為a、b、c。 \n \xa0 \n So, the cosine rule is simply this relationship here. \n 餘弦定理就是這種關係。 \n \xa0 \n It’s a bit like Pythagoras’ theorem except for this extra term on the end with the cos a in it. \n 它有點像畢達哥拉斯的定理，除了末尾有cos a以外。 \n \xa0 \n Now, let’s apply the cosine rule to the particular triangle we looked at a moment ago. \n 現在，讓我們將餘弦定理用於我們剛才所看到的三角形。 \n \xa0 \n It’s pretty straightforward to write down this particular relationship. \n 寫下這種特殊關係非常簡單。 \n \xa0 \n We can isolate the term cos alpha which gives us the angle alpha that we’re interested in. \n 我們可以分離出cosα，它給出了我們需要的角度α。 \n \xa0 \n And, it’s defined in terms of the constant link lengths, A1 and A2 and the position of the end effector, x and y. \n 而且，他是根據連桿長度A1跟A2以及末端執行器位置x、y來定義的。 \n \xa0 \n We can write this simple relationship between the angles alpha and q2. \n 我們可以寫出簡單的關係在角度α跟q2之間。 \n \xa0 \n And, we know from the shape of the cosine function that cos of q2 must be equal to negative of cos alpha. \n 而且，我們從餘弦函數的形狀知道，cosq2必須等於-cosα。 \n \xa0 \n This time, let’s just write an expression for the cosine of the joined angle q2. \n 這一次，讓我們為節點角q2的餘弦函數寫一個表示式。 \n \xa0 \n Now, we’re going to draw yet another red triangle and we’re going apply some simple trigonometry here. \n 現在，讓我們畫一個另外的三角形然後利用簡單的三角函數。 \n \xa0 \n If we know q2, then we know this length and this length of the red triangle. \n 如果我們知道q2，甚至我們知道這個長度和這個紅色三角形的長度。 \n \xa0 \n We can write this relationship for the sine of the joined angle q2. \n 我們可以寫出節點角q2的正弦關係。 \n \xa0 \n Now, we can consider this bigger triangle whose angle is beta and this side length of this triangle is given here in blue. \n 現在，我們可以知道這個大的三角形，角度是β，然後由藍色表示此三角形的邊。 \n \xa0 \n And, the length of the other side of the triangle is this. \n 且三角形另一邊長度是這個。 \n \xa0 \n So, now we can write an expression for the angle beta in terms of these parameters here \n 所以，現在我們可以根據這些參數寫出角度β的表達式。 \n \xa0 \n Going back to the red triangle that we drew earlier, we can establish a relationship between q1 and the angle beta. \n 回到我們之前畫的紅色三角形，我們可以建立q1和角度β之間的關係。 \n \xa0 \n Introduce yet another angle, this one gamma and we can write a relationship between the angle gamma and the tooltip coordinates x and y. \n 引入另一個角度，γ，我們可以寫出角度γ和工具提示坐標x、y之間的關係。 \n \xa0 \n Now, we can write a simple relationship between the angles that we’ve constructed, gamma and beta and the joined angle we’re interested in which is q \n 現在，可以寫出我們建構的角度γ和β與我們感興趣的節點角q之間的簡單關係。 \n \xa0 \n And, the total relationship looks something like this. \n 而且，整個關係看起來像這樣。 \n \xa0 \n Quite a complex relationship, it gives us the angle of joined one, that’s q1 in terms of the end effector coordinates y and x, and a bunch of constants, a1 and a2, and it’s also a function of the second joint angle, q2. \n 相當複雜的關係，它為我們提供了連接的角度，即末端執行器坐標q1的y和x，以及一系列常數a1和a2，它也是第二個節點角q2的函數。 \n \xa0 \n So, let’s summarize what it is that we have derived here. \n 所以，讓我們總結一下我們在這裡得出的結論。 \n \xa0 \n We have an expression for the cosine of q2 and we have an expression for q1. \n 我們有cosq2以及q1的表達式。 \n \xa0 \n Now, the cosine function is symmetrical about 0. \n 現在，餘弦函數在0對稱。 \n \xa0 \n So, if we know the value of the cosine of q2, then there are two possible solutions a positive angle and a negative angle. \n 所以，如果我們知道cosq2的值可能有兩種解，正角或負角。 \n \xa0 \n We’re going to explicitly choose the positive angle. Which means that I can write this expression here. \n 我們將明確選擇正角。這意味著我可以在這裡寫這個表達式。 \n \xa0 \n And now, we have what we call the inverse kinematic solution for this two-link robot. \n 現在，我們有了這個二連桿機構的逆向運動學解決方法。 \n \xa0 \n We have an expression for the two joined angles, q1 and q2 in terms of the end effector pose x and y, and a bunch of constants. \n 我們有兩個節點角q1和q2的表達式，根據末端執行器姿勢x和y以及一系列常數。 \n \xa0 \n You notice that the two equations are not independent. The equation for q1, in fact, depends on the solution for q2. \n 你注意到這兩個方程式不是獨立的事實上，q1 的方程取決於 q2 的解。 \n \xa0 \n In this case, q2 is negative and we’re going to write the solution for q2 with a negative sign in front of the inverse cosine. \n 在這種情況下，q2是負數，我們將用負號在cos -1 前寫出q2的解。 \n \xa0 \n Now, we need to solve for q1, so we’re going to introduce this particular red triangle, the angle beta that we solved previously, and the angle gamma which is defined in terms of y and x. \n 現在，我們需要求解q1，因此我們將利用這個紅色三角形，我們之前求解的角度β以及根據y、x定義的角度γ。 \n \xa0 \n Now, we write a slightly different relationship between q1, gamma and beta, different to what we had before. There’s a change of sign involved. \n 現在，我們在q1、γ和β之間寫出略有不同的關係，與我們之前的關係不同。 涉及到符號的變化。 \n \xa0 \n Then, we can substitute all that previous equation and come up with this expression for q1. \n 然後，我們可以替換之前的所有等式，並得出q1的這個表達式。 \n \xa0 \n Again, there is a change of sign here. Previously, this was a negative sign. \n 同樣，這裡的符號發生了變化。 以前，這是一個負號。 \n \xa0 \n And, here in summary form is the solution for the inverse kinematics of our two-link robot when it is in this particular configuration, where q2 is negative. \n 並且，這裡是我們的二連桿機構在這種特定配置下的逆向運動學總結形式，其中q2為負。 \n \xa0 \n Let’s compare the two solutions, the case where q2 is positive and the case where q2 is negative. \n 讓我們比較兩個解決方案，q2為正的情況和q2為負的情況。 \n 結論 : 可以利用最終位置的 x、y 來計算機構的轉角 q1、q2 \n q1 =\xa0\xa0 tan -1 \xa0 (y/x) - tan -1 \xa0 (a2 sinq2/a1+a2 cosq2) \n q2 =\xa0\xa0 cos -1 \xa0 (x 2 +y 2 -a1 2 -a2 2 /2a1a2) \n', 'tags': '', 'url': 'using geometry.html'}, {'title': 'w16', 'text': '', 'tags': '', 'url': 'w16.html'}, {'title': 'oneshape繪圖', 'text': 'https://cad.onshape.com/documents/ec3638947f8008f58291660b/w/c01a74c3edad00122b02b07f/e/f2607389dd386e939435e130 \n \n', 'tags': '', 'url': 'oneshape繪圖.html'}, {'title': 'coppeliasim場景', 'text': '\n 建立 CoppeliaSim 4.1.0 MTB robot 場景 \n', 'tags': '', 'url': 'coppeliasim場景.html'}, {'title': '手臂末端加入 components-gripper-suction pad 吸盤跟鍵盤控制', 'text': "程式碼 \n if (auxiliaryData[1]==112) then \nsim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),'active','true')\n      end \nif (auxiliaryData[1]==113) then \nsim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),'active','false')\n      end  \n \n", 'tags': '', 'url': '手臂末端加入 components-gripper-suction pad 吸盤跟鍵盤控制.html'}, {'title': 'MTB_robot add IK', 'text': 'lua程式測試網頁版 \n https://www.runoob.com/try/runcode.php?filename=HelloWorld&type=lua \n 角度計算程式 \n -- The decimal point of number x is rounded to the nth place\nfunction round(x, n)\n    n = math.pow(10, n or 0)\n    x = x * n\n    if x >= 0 then x = math.floor(x + 0.5) else x = math.ceil(x - 0.5) end\n    return x / n\nend\n \n-- radian to degree\ndeg = 180/math.pi\n-- link 1 length\na1 = 0.467\n-- link 2 length\na2 = 0.4\n-- derivated based upon https://www.youtube.com/watch?v=IKOGwoJ2HLk&t=311s\nfunction ik(x, y)\n    -- (x, y) need to be located inside the circle with radius a1+a2\n    if (x^2 + y^2) <= (a1+ a2)^2 then\n        q2 = math.acos((x^2+y^2-a1^2-a2^2)/(2*a1*a2))\n        q1 = math.atan2(y, x) - math.atan2((a2*math.sin(q2)), (a1+a2*math.cos(q2)))\n        return {round(q1*deg, 4), round(q2*deg, 4)}\n    else\n        print("Over range!")\n        -- end the script execution\n        os.exit()\n    end\nend\n \ntheta = ik(-0.3, -0.55)\n \nprint(theta[1], theta[2]) \n \n \n \n 位子控制程式碼 \n       if (auxiliaryData[1]==49) then --1\n      V1=43.9242*deg\n      V2=66.007*deg\n      sim.setJointPosition(axis1, V1)\n      sim.setJointPosition(axis2, V2)\n      print(0.2,0.7)\n      end\n      if (auxiliaryData[1]==50) then --2\n      V1=-158.2529*deg\n      V2=87.7894*deg\n      sim.setJointPosition(axis1, V1)\n      sim.setJointPosition(axis2, V2)\n      print(-0.3,0.55)\n      end \n \n', 'tags': '', 'url': 'MTB_robot add IK.html'}, {'title': 'MTB_robo use require', 'text': '\n', 'tags': '', 'url': 'MTB_robo use require.html'}, {'title': 'w17小組task', 'text': "籃球機控制檔案 \n 籃球機 sensor \n final Basketball-Machine \n 籃球框3.1.7z \n 籃球框3.2.7z \n 籃球框移動版本程式一 \n 利用鍵盤控制 \n function sysCall_init()\n     axis3=sim.getObjectHandle('Prismatic_joint')\n     distance3 = 0\nend\n \nfunction sysCall_actuation()\n message,auxiliaryData=sim.getSimulatorMessage()\n if (message==sim.message_keypress) then\n      print(auxiliaryData[1])--key\n      if (auxiliaryData[1]==string.byte(' ')) then\n      end\n      if (auxiliaryData[1]==2007) then --up\n      distance3 = distance3 + 0.01\n      sim.setJointPosition(axis3, distance3)\n      end\n      if (auxiliaryData[1]==2008) then --down\n      distance3 = distance3 - 0.01\n      sim.setJointPosition(axis3, distance3)\n      end\n end   \nend\n \n \n \xa0版本二利用迴圈做自動左右移動 \n \n function sysCall_init()\n     j=sim.getObjectHandle('slide')\n     d = 0--posion\n     a=10\n     b=0\nend\n \nfunction sysCall_actuation()\n\nfor i=0,10 do\n      if (a==10) then\n      d = d - 0.0003\n      sim.setJointPosition(j, d)\n      if(d<=-0.5)then\n      a=0\n      b=10\n      end\n      print(11111)\n      end\n      if (b==10) then\n      d = d + 0.0003\n      sim.setJointPosition(j, d)\n      if(d>=0.5)then\n      a=10\n      b=0\n      end\n      print(333)\n      end\n      end  \nend \n \n", 'tags': '', 'url': 'w17小組task.html'}, {'title': 'bug', 'text': 'wsgi打不開 \n \n 將倉儲裡2個檔案複製一分到cmsimde資料夾裡', 'tags': '', 'url': 'bug.html'}]};