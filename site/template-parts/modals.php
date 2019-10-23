<div class="login-modal fancy-modal" id="loginModal">

  <div class="nav-slider">

    <div class="nav-slider-track">

      <div class="nav-slider-item current ajax-form" id="loginSlide">

        <div class="nav-slider-item-content">
          <span class="dismiss-modal ico hover-red">
            <?= $svg->get_ico('close'); ?>
          </span>
          <div class="fancy-head">
            <h3 class="fancy-title">Вход</h3>
          </div>

          <div class="fancy-body">

            <form class="form fancy-form login-form form-validate" action="/_request.php?action=login" method="post">

              <div class="form-group">
                <div class="input-wrap">
                  <input type="email" name="email" id="email" class="input" placeholder="Email" required>
                </div>
              </div>

              <div class="form-group">
                <div class="input-wrap view-pass-input">
                  <input type="password" name="password" class="input" id="password" placeholder="Пароль" required>
                  <button type="button" class="ico no_view-btn grey3 hover-black">
                    <?= $svg->get_ico('no_view'); ?>
                  </button>
                  <button type="button" class="ico view-btn">
                    <?= $svg->get_ico('eye'); ?>
                  </button>
                </div>
              </div>

              <div class="form-controls form-group">
                <div class="forgot-pass">
                  <a href="#recoverPassSlide" class="forgot-pass-link nav-slider-link">Забыли пароль?</a>
                </div>
                <label for="rmemeber" class="has-checkbox">
                  <div class="beauty-checkbox">
                    <input type="checkbox" name="rmemeber" id="rmemeber">
                    <span class="check"></span>
                  </div>
                  Запомнить
                </label>
              </div>


              <div class="form-buttons">

                <button type="submit" class="btn red submit-btn">Войти</button>

                <div class="social-login">
                  <div class="btn-wrap">
                    <a href="#" class="btn has-ico btn-vk">
                      <span class="ico">
                        <?= $svg->get_ico('vk'); ?>
                      </span>
                      <span>Вконтакте</span>
                    </a>
                  </div>
                  <div class="btn-wrap">
                    <a href="#" class="btn has-ico btn-fb">
                      <span class="ico">
                        <?= $svg->get_ico('fb'); ?>
                      </span>
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

              </div>

            </form>
          </div>

          <div class="fancy-foot">
            <div class="create-account">
              Нет аккаунта? <a href="#registerSlide" class="register-link nav-slider-link">Зарегистироваться</a>
            </div>
          </div>
        </div>
      </div>



      <div class="nav-slider-item ajax-form" id="recoverPassSlide">
        <div class="nav-slider-item-content">
          <span class="ico nav-slider-reset hover-red">
            <?= $svg->get_ico('larrow'); ?>
          </span>
          <span class="dismiss-modal ico hover-red">
            <?= $svg->get_ico('close'); ?>
          </span>
          <div class="fancy-head">
            <h3 class="fancy-title">Вход</h3>
            <h5 class="fancy-sub-title">
              Укажите адрес электронной почты, чтобы получить ваш пароль
            </h5>
          </div>

          <div class="fancy-body">
            <form class="form fancy-form recover-form form-validate" action="/_request.php?action=recover" method="post">

              <div class="form-group">
                <div class="input-wrap">
                  <input type="email" name="recoverEmail" id="recoverEmail" class="input" placeholder="Email" required>
                </div>
              </div>



              <div class="form-buttons">
                <button type="submit" class="btn red submit-btn">Войти</button>
                <p class="form-text">
                  или войдите через соц. сети
                </p>
                <div class="social-login">
                  <div class="btn-wrap">
                    <a href="#" class="btn has-ico btn-vk">
                      <span class="ico">
                        <?= $svg->get_ico('vk'); ?>
                      </span>
                      <span>Вконтакте</span>
                    </a>
                  </div>
                  <div class="btn-wrap">
                    <a href="#" class="btn has-ico btn-fb">
                      <span class="ico">
                        <?= $svg->get_ico('fb'); ?>
                      </span>
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

              </div>

            </form>
          </div>

          <div class="fancy-foot">
          </div>

        </div>
      </div>



      <div class="nav-slider-item ajax-form" id="registerSlide">
        <div class="nav-slider-item-content">
          <span class="ico nav-slider-reset hover-red">
            <?= $svg->get_ico('larrow'); ?>
          </span>
          <span class="dismiss-modal ico hover-red">
            <?= $svg->get_ico('close'); ?>
          </span>
          <div class="fancy-head">
            <h3 class="fancy-title">Регистрация</h3>
          </div>

          <div class="fancy-body">
            <form class="form fancy-form register-form form-validate" action="/_request.php?action=register" method="post">

              <div class="form-group">
                <div class="input-wrap">
                  <input type="text" name="registerName" id="registerName" class="input" placeholder="Имя" required>
                </div>
              </div>

              <div class="form-group">
                <div class="input-wrap">
                  <input type="email" name="registerEmail" id="registerEmail" class="input" placeholder="Email" required>
                </div>
              </div>

              <div class="form-group">
                <div class="input-wrap">
                  <input type="password" name="registerPassword" id="registerPassword" class="input" placeholder="Пароль" data-password required>
                </div>
              </div>

              <div class="form-group">
                <div class="input-wrap">
                  <input type="password" name="registerPasswordRepeat" id="registerPasswordRepeat" class="input" placeholder="Повторите пароль" data-password required>
                </div>
              </div>

              <div class="form-buttons">
                <button type="submit" class="btn red submit-btn">Войти</button>
                <p class="form-text">
                  или войдите через соц. сети
                </p>
                <div class="social-login">
                  <div class="btn-wrap">
                    <a href="#" class="btn has-ico btn-vk">
                      <span class="ico">
                        <?= $svg->get_ico('vk'); ?>
                      </span>
                      <span>Вконтакте</span>
                    </a>
                  </div>
                  <div class="btn-wrap">
                    <a href="#" class="btn has-ico btn-fb">
                      <span class="ico">
                        <?= $svg->get_ico('fb'); ?>
                      </span>
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

              </div>


            </form>
          </div>

          <div class="fancy-foot">
            Уже есть аккаунт? <a href="#loginSlide" class="register-link nav-slider-link">Войти</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>





<div class="subscribe-modal fancy-modal" id="subscribeModal">
  <span class="dismiss-modal ico hover-red">
    <?= $svg->get_ico('close'); ?>
  </span>
  <form class="form fancy-form subscribe-form ajax-form form-validate" action="/_request.php?action=subscribe" method="post">

    <div class="fancy-head">
      <h3 class="fancy-title">Подпишитесь на наши новости</h3>
    </div>

    <div class="fancy-body">
      <div class="form-group">
        <div class="input-wrap">
          <input type="email" name="subscribeEmail" id="subscribeEmail" class="input" placeholder="Email" required>
        </div>
      </div>

      <div class="form-group">
        <label for="confirmRegulations" class="has-checkbox">
          <div class="beauty-checkbox">
            <input type="checkbox" name="confirmRegulations" id="confirmRegulations" required>
            <span class="check"></span>
          </div>
          Нажимая на кнопку, вы подтверждаете, что ознакомились с Политикой конфиденциальности и Пользовательским соглашением и даете согласие на обработку своих персональных данных
        </label>
      </div>
    </div>

    <div class="btn-row center">
      <button type="submit" class="btn red">Подписаться</button>
    </div>

  </form>

</div>









<div class="cancel-subscribe-modal fancy-modal" id="cancelSubscribeModal">
  <div class="fancy-head">
    <h3 class="fancy-title">Жаль, что вы решили отменить подписку</h3>
    <h5 class="fancy-sub-title">
      Мы всегда будем рады, если вы решите возобновить подиску снова
    </h5>
  </div>
  <div class="btn-row center">
    <a href="#subscribeModal" data-fancybox class="btn red subscribe-link">Подписаться</a>
  </div>
</div>
