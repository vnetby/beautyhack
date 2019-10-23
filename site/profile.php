<div class="main-content profile-page" id="mainContent">

  <section class="section container-fluid profile-section">
    <?php
    $section_head = [
      'title' => 'София Воробьева',
      'bold'  => true
    ];
    require ( 'template-parts/section_head.php' );
    ?>

    <form action="/_request.php?action=save_profile" class="profile-form ajax-form" id="profileForm">
      <div class="row profle-row">
        <div class="col-lg-6 avatar-col">
          <div class="avatar has-preloader">
            <img src="<?= URL; ?>img/authors/list_01.jpg" alt="profile avatar" class="object-cover" id="profileAvatarPreview">
            <label class="change-avatar">
              <input type="file" name="profileAvatar" id="profileAvatar" class="hidden preview-image-input" data-preview="#profileAvatarPreview" data-allow="jpg|png|gif|jpeg|PNG">
              <span>изменить</span>
            </label>
          </div>
        </div>
        <div class="col-lg-4 dates-col">

          <div class="personal-dates form-container">
            <h3 class="title fs-xxl">Личные данные</h3>

            <div class="form-group">
              <div class="input-wrap">
                <input type="email" name="profileEmail" id="profileEmail" class="input" placeholder="Email" value="karina.andreeva@gmail.com">
              </div>
            </div>

            <div class="form-group">
              <div class="input-wrap">
                <input type="text" name="profileName" id="profileName" class="input" placeholder="Имя Фамилия" value="Карина Андреева">
              </div>
              <div class="input-help visible error">
              </div>
            </div>
          </div>


          <div class="personal-dates form-container">
            <h3 class="title fs-xxl">Изменить пароль</h3>

            <div class="form-group">
              <div class="input-wrap">
                <input type="password" name="profileOldPass" id="profileOldPass" class="input" placeholder="Старый пароль">
              </div>
            </div>

            <div class="form-group">
              <div class="input-wrap">
                <input type="password" name="profilePass" id="profilePass" class="input" placeholder="Новый пароль">
              </div>
              <div class="input-help">
              </div>
            </div>
            <div class="form-group">
              <div class="input-wrap">
                <input type="password" name="profilePassRepeat" id="profilePassRepeat" class="input" placeholder="Повторите пароль">
              </div>
              <div class="input-help">
              </div>
            </div>
          </div>

        </div>

        <div class="col-lg-2"></div>
      </div>

      <div class="row btn-row">
        <button type="submit" class="btn black">Сохранить изменения</button>
        <a href="#" class="btn light">Выйти из аккаунта</a>
      </div>
    </form>

  </section>
</div>
