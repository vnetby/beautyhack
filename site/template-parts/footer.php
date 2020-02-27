<footer class="footer">
  <div class="container-fluid">

    <div class="row">
      <div class="col-md-12">
        <div class="logo-row foot-row">
          <a href="/" id="footLogo">
            <?= file_get_contents( ABSPATH . '/img/logo.svg' ); ?>
          </a>
        </div>

        <div class="foot-block foot-row menu-foot-block">
          <ul class="bottom-menu" id="bottomMenu">
            <li class="nav-item">
              <a href="#" class="nav-link">О нас</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Контакты</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Реклама</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Вакансии</a>
            </li>
          </ul>
          <ul class="foot-links">
            <li class="nav-item">
              <a href="#" class="nav-link">Политика Конфиденциальности</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Пользовательское соглашение</a>
            </li>
          </ul>
        </div>

        <div class="foot-block foot-row">
          <h5 class="foot-title fs-x-l">Мы в социальных сетях</h5>
          <div class="social-links">
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


        <div class="foot-block foot-row subscribe-footer">
          <h5 class="foot-title fs-x-l">Подписка на нашу рассылку</h5>
          <div class="btn-row center">
            <a href="#subscribeModal" data-fancybox class="btn black fs-m subscribe-link">Подписаться</a>
          </div>
        </div>



        <div class="foot-block foot-row">
          <h5 class="foot-title age fs-x-l">+16</h5>
          <div class="foot-text info">
            © 2015-2019 Бьюти Хак. Все права защищены.<br>
            Внимание! На сайте не разрешается размещать фото, видео или иной контент, если Вы не имеете на это необходимых прав и/или согласия правообладателя. Перед регистрацией рекомендуем внимательно ознакомиться с пользовательским соглашением».
          </div>
        </div>


        <div class="foot-row mb-0 pixel-copyrights">
          <a href="#" target="_blank">
            <?= $svg->get_ico('pixel_copyrights'); ?>
          </a>
        </div>


      </div>
    </div>
  </div>
</footer>
