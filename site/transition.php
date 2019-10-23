<div class="main-content transition-page" id="mainContent">
  <?php
  require('template-parts/better_in_month.php');
  ?>
  <section class="section container-fluid transition-section">

    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <h2 class="section-title fs-l">
          Вы пытаетесь перейти на сторонний ресурс
        </h2>
      </div>
      <div class="col-lg-2"></div>
    </div>

    <div class="row article">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <p>
          Администрация сайта Beautyhack не несет ответственности за любой ущерб, который вы можете получить в результате этого действия.
        </p>
        <p>
          Мы  не рекомендуем скачивать какие-либо файлы, вводить авторизационные данные или предоставлять любую другую информацию о себе, если вы не уверены в надежности ресурса.
        </p>

        <h3 class="art-title-md">
          Я осознаю все риски и хочу продолжить
        </h3>
        <a href="http://facebook.com/" target="_blank" class="external-link art-link">http://facebook.com/</a>
        <div class="btn-row">
          <a href="#" class="btn light has-ico back-btn">
            <span class="ico larrow">
              <?= $svg->get_ico('larrow'); ?>
            </span>
            <span>
              Вернуться назад
            </span>
          </a>
        </div>
      </div>
      <div class="col-lg-2"></div>
    </div>

  </section>
</div>
