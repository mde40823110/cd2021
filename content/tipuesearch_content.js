var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '每周學習進度', 'text': '', 'tags': '', 'url': '每周學習進度.html'}, {'title': 'W3進度', 'text': 'onshape 零件圖 \n 軸承零件 \n https://cad.onshape.com/documents/0bfc2dc1ec6f4ab23ac54ffe/w/0dfb2b29b00da67b3c1974c6/e/0de22abfa577bb4913cc1c05 \n 引球員盤 \n https://cad.onshape.com/documents/0e376e65b8e53e50798db3f8/w/38fdbe7da426bcea827d31f5/e/c8220b94c818dc32174f27da \n 主體 \n https://cad.onshape.com/documents/6b80403679e6d564d3030ea0/w/e8e6dda875cffa2431ab0d92/e/adac81874f58c0e7f7c82a05 \n 底座+球桶 \n https://cad.onshape.com/documents/e7f83d8dad44353fefca9ba8/w/c9bfde151271f69c6a6a2b1d/e/dfcfbb7a2da4266f925ff71c \n 組合圖 \n https://cad.onshape.com/documents/5163181e2fe649a1d31dd674/w/4e88bfbfabd294ec7f2f2b4d/e/58709a4788fea2051cd57dec \n', 'tags': '', 'url': 'W3進度.html'}, {'title': 'W4進度', 'text': '', 'tags': '', 'url': 'W4進度.html'}, {'title': 'ssh', 'text': 'SSH 指 Secure SHell, 是一種網路連線加密機制, 當我們在 Mac OS 或 Linux 操作系統中的 Terminal 或 XTerm 時, 可以利用 ssh 帳號@遠端主機 ip 或符號名稱, 就可以輸入認證密碼, 登入到遠端主機. \n 一般針對公開的 Github 倉儲, 任何人都可以直接透過 https 協定 clone 倉儲, 無需認證, 但是倉儲協同者若要從近端將改版資料送到 Github, 就必須通過認證, 假如採 https 協定, 則倉儲協同者在推送改版資料時, 必須提供帳號與密碼. \n 除了 https 協定, Github 也接受倉儲的協同者以 SSH 連線的方式, git clone private 倉儲, 或以 SSH 連線的方式將近端改版資料推送到遠端倉儲. \n SSH 的連線加密機制依賴 private key 與 public key 之間的配對, 當使用者建立 SSH key pair 時, private key 必須保護在近端, 而 public key 則必須送到進行認證的遠端伺服器中. \n 建立 OpenSSH key pair \n Github 伺服器所支援的 SSH 為 OpenSSH 檔案格式的協定, 因此使用者要送到 Github 伺服器上的 OpenSSH 格式 public key, 可以透過 portablegit 中的 sh.exe 進入 SHell, 然後利用以下指令建立採  rsa  加密演算法的 key pair: \n ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 在 -C 後的使用者學號字串, 會直接附加在 OpenSSH public key 檔案的最後端, 讓使用者得以辨識 public key 的對應使用者, 而所建立的 OpenSSH private key 則可以透過 puttygen 轉換為 putty 特有檔案格式. \n Putty 作為 SSH 連線客戶端工具 \n Putty 套件可用於 Windows 與 Linux 操作系統, 可以讓使用者以 SSH 加密機制遠端登入到其他伺服器主機, 由於電腦輔助設計室電腦的第三磁區上課時會轉為純 IPv6 協定上網, 當使用者要將近端改版資料推送到遠端時, 由於 Github 至今仍只支援 IPv4 網路協定, 因此無論是以 https 或 ssh 方式連線, 都必須透過能同時支援 IPv4 與 IPv6 的代理主機. \n 以 https 協定對 Github 連線的代理主機設定位於 home/.gitconfig, 而在 Windows 10 操作系統中採 SSH 對 Github 連線, 就必須將代理主機與 private key 的設定, 透過 Putty 完成. \n 以 SSH 協定與 Github 連線 \n 1. 建立一對 OpenSSH key pair, private key 保留在近端, 將 public key 登記在 Github 所屬帳號設定中. \n 2. 近端可攜系統啟動時, 必須確認已經設定 \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n 表示 git 將透過 putty 工具以 ssh 加密協定對 Github 連線 \n 3. 在 Putty 中設定對 github.com ssh 時必須提供的 Proxy 代理主機設定與 Auth 認證所需的近端 private key, 而且必須利用 puttygen 將 OpenSSH 格式轉為 putty 檔案格式 \n 4. 無論在 git clone 或 git push (URL 位於倉儲 .git/config 中), URL 必須使用  git@github.com:帳號/倉儲名稱.git  連線 \n 利用 SSH 對 Gitlab 連線 \n \n 首先必須要將 OpenSSH 格式的 public key 登錄到 Gitlab 帳號下 \n 確定已經利用 putty.exe 建立 session 名稱為 gitlab.com 的設定, 其中設定 AUTH 與 Proxy 資料 \n 修改各倉儲中 .git/config 的 gitlab remote add 設定, 以 url = git@gitlab.com:user_name/url 對 gitlab 連接. \n \n \n Network <<  Previous   Next  >> OpenSSH \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n  啟用 LaTeX equations 編輯  \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script> \n', 'tags': '', 'url': 'ssh.html'}, {'title': '更新cmsimde', 'text': '進到cmsimde檔案裡輸入下指令合併更新版本 \n git pull\n \n \n 到up_dir複製一分到cd2021合併資料即可更新完成 \n 接著在命令列輸入cms檢查是否更新完成 \n 若成功將會執行 python wsgi.py', 'tags': '', 'url': '更新cmsimde.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};