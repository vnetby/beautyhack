<header class="header">

  <div class="container-fluid big-banner-container desktop">
    <div class="row big-banner-row">
      <div class="col-12 big-banner">
        <!-- <img src="<?= URL; ?>img/big-banner.jpg" alt="banner"> -->
        <!--  AdRiver code START. Type:AjaxJS Site: beauty BN:2 -->
        <div id="adriver_banner_427261417"></div>
        <script type="text/javascript">
          new adriver("adriver_banner_427261417", {
            sid: 210980,
            bt: 52,
            bn: 2
          });
        </script>

        <!--  AdRiver code END  -->

      </div>
    </div>
  </div>

  <div class="container-fluid logo-container desktop">
    <div class="row logo-row">
      <div class="col-4 social-col" id="socialCol">
        <div class="social-links" id="socialLinks">
          <a href="#" class="social-ico tel hover-tel black">
            <span class="ico">
              <?= $svg->get_ico('tel'); ?>
            </span>
            <span class="social-name fs-s">
              2k
            </span>
          </a>
          <a href="#" class="social-ico fb hover-fb black">
            <span class="ico">
              <?= $svg->get_ico('fb'); ?>
            </span>
            <span class="social-name fs-s">
              2k
            </span>
          </a>
          <a href="#" class="social-ico in hover-in black">
            <span class="ico">
              <?= $svg->get_ico('in'); ?>
            </span>
            <span class="social-name fs-s">
              2k
            </span>
          </a>
          <a href="#" class="social-ico you hover-you black">
            <span class="ico">
              <?= $svg->get_ico('you'); ?>
            </span>
            <span class="social-name fs-s">
              2k
            </span>
          </a>
        </div>
      </div>
      <div class="col-4 logo-col" id="topLogoCol">
        <a href="/" id="topLogo">
          <?= file_get_contents(ABSPATH . '/img/logo.svg'); ?>
        </a>
      </div>
      <div class="col-4 profile-col" id="profileCol">
        <div class="profile-controls" id="profileControls">
          <a href="#subscribeModal" data-fancybox class="subscribe-link">Подписка</a>
          <?php
          if (!$login) {
          ?>
            <a href="#loginModal" data-fancybox class="profile-link black hover-red">
              <span>Войти в профиль</span>
              <?= $svg->get_ico('login'); ?>
            </a>
          <?php
          } else {
          ?>
            <div class="user-top">
              <div class="avatar">
                <img src="<?= URL; ?>img/authors/list_01.jpg" alt="avatar">
              </div>
              <div class="dropdown">
                <a href="#" data-toggle="dropdown" class="user-name">София Воробьева</a>
                <ul class="dropdown-menu profile-menu">
                  <li class="profile-menu-item set-item">
                    <a href="#" class="profile-menu-link grey2 hover-black">
                      <span class="ico">
                        <?= $svg->get_ico('sets'); ?>
                      </span>
                      <span>
                        Настройки
                      </span>
                    </a>
                  </li>
                  <li class="profile-menu-item bookmark-item">
                    <a href="#" class="profile-menu-link grey2 hover-black">
                      <span class="ico">
                        <?= $svg->get_ico('bookmarks'); ?>
                      </span>
                      <span>
                        Закладки
                      </span>
                    </a>
                  </li>
                  <li class="profile-menu-item exit-item">
                    <a href="#" class="profile-menu-link grey hover-grey2">
                      <span class="ico">
                        <?= $svg->get_ico('login'); ?>
                      </span>
                      <span>
                        Выйти из профиля
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          <?php
          }
          ?>

          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="fixed-scroll-bar" id="fixedOnScrollMenu">

    <div class="container-fluid nav-container" id="navContainer">
      <div class="row nav-row">
        <div class="col menu-btn-col">
          <div class="hamburger hamburger--slider js-hamburger" id="openHiddenMenuBtn">
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
        <nav class="col top-nav" id="topNavCol">
          <ul class="top-menu" id="topMenu">
            <li class="nav-item mobile profile-menu-link">
              <a href="#loginModal" data-fancybox class="profile-link nav-link fs-xm black hover-red">
                <span>Войти в профиль</span>
                <?= $svg->get_ico('login'); ?>
              </a>
            </li>
            <li class="nav-item"><a href="#" class="nav-link fs-xm">Красота</a></li>
            <li class="nav-item"><a href="#" class="nav-link fs-xm">ЗОЖ</a></li>
            <li class="nav-item"><a href="#" class="nav-link fs-xm">Материнство</a></li>
            <li class="nav-item"><a href="#" class="nav-link fs-xm">Новости</a></li>
            <li class="nav-item"><a href="#" class="nav-link fs-xm">Cтиль жизни</a></li>
            <li class="nav-item"><a href="#" class="nav-link fs-xm">Видео</a></li>
            <li class="nav-item"><a href="#" class="nav-link fs-xm">Астро</a></li>
            <li class="nav-item mobile tags-menu-link">
              <a href="#" class="nav-link fs-xm open-tags-btn">Теги</a>
              <a href="#" class="ico open-tags-btn black hover-red">
                <?= $svg->get_ico('rarrow'); ?>
              </a>
            </li>
          </ul>
        </nav>
        <div class="col search-col" id="searchCol">
          <a href="#" class="ico">
            <?= $svg->get_ico('star'); ?>
          </a>
          <button class="ico black hover-red" id="openSearchBtn">
            <?= $svg->get_ico('search'); ?>
          </button>

        </div>
      </div>
    </div>


    <div class="search-container" id="searchContainer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <form class="form search-form fs-l" action="/" data-ajax="_request.php?action=search" method="get" id="searchForm">
              <div class="btn-wrap">
                <button type="submit" id="searchBtn" class="ico black hover-red">
                  <?= $svg->get_ico('search'); ?>
                </button>
                <span class="ico loading-ico">
                  <img src="<?= URL ?>img/ajax-gif.gif" alt="loading...">
                </span>
              </div>
              <input type="text" class="search-input input" placeholder="Найти" name="search" id="searchInput">
              <button type="button" class="ico close-search-ico black hover-red" id="closeSearchBtn">
                <?= $svg->get_ico('close'); ?>
              </button>
            </form>
            <div class="col-lg-12 search-res-container mCustomScrollbar" id="searchResContainer">

            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="hidden-menu-container" id="hiddenMenu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 like-container" id="hiddenMenuContainer">
            <ul class="tags-menu" id="tagsMenu">
              <li class="nav-item mobile close-tags">
                <a href="#" class="ico close-tags-btn black hover-red">
                  <?= $svg->get_ico('larrow'); ?>
                </a>
                <a href="#" class="close-tags-btn fs-x-l">Теги</a>
              </li>
              <li class="nav-item has-childs">
                <span class="menu-title fs-xm">Стиль</span>
                <ul class="child-menu">
                  <li class="nav-item">
                    <a href="" class="menu-link">Стиль жизни</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Смените имидж</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Лучшие образы</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Подиум</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Хит недели от стилиста</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item has-childs">
                <span class="menu-title fs-xm">Обзор</span>
                <ul class="child-menu">
                  <li class="nav-item">
                    <a href="" class="menu-link">Снимает и тестирует редакция</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Косметичка профи</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Видео</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Вопрос эксперту</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Папа может</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item has-childs">
                <span class="menu-title fs-xm">Косметика</span>
                <ul class="child-menu">
                  <li class="nav-item">
                    <a href="" class="menu-link">Бьютихакер / Мама-хакер</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Выбор визажистов</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Выбор косметолога</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Полиция красоты</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Хит недели от визажиста</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item has-childs">
                <span class="menu-title fs-xm">Общество</span>
                <ul class="child-menu">
                  <li class="nav-item">
                    <a href="" class="menu-link">Celebrity дня</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">5 видео месяцев</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Фотоальбом</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Поколение Z</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Интервью со звездой</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item has-childs">
                <span class="menu-title fs-xm">Материнство</span>
                <ul class="child-menu">
                  <li class="nav-item">
                    <a href="" class="menu-link">Папа может</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Вопрос эксперту</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Поколение Z</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Видео</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="menu-link">Семья</a>
                  </li>
                </ul>
              </li>

            </ul>


            <div class="hidden-top-menu-container" id="hiddenTopMenuContainer">
              <div class="mobile subscribe-container" id="subscribeContainer">
                <div class="title fs-x-l">
                  Подписка на нашу рассылку!
                </div>
                <a href="#subscribeModal" class="subscribe-btn btn red subscribe-link" data-fancybox>Подписаться</a>

              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  </div>


</header>