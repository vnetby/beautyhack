<div class="main-content article-page" id="mainContent">

  <div class="art-ajax-container" id="artAjaxContainer">

    <!-- <div class="art-page" data-page-title="article 2"> -->
    <div class="art-page" data-next="?page=article" data-page-title="article 2">

      <?php
      if ( $isAjax ) {
        ?>
        <div class="container-fluid display-mobile section mb-5">
          <div class="row">
            <div class="col-lg-12 banner">
              <a href="#" class="dashed-shadow">
                <span class="shadow"></span>
                <div class="ajax-image" data-sm="<?= URL; ?>/img/true_banners/banner_300_250.jpg"></div>
              </a>
            </div>
          </div>
        </div>


        <div class="container-fluid display-mobile section mb-5">
          <div class="col-lg-12 banner">
            <a href="#" class="display-mobile">
              <div class="ajax-image" data-sm="<?= URL; ?>/img/true_banners/banner_320_250.jpg"></div>
            </a>
          </div>
        </div>
        <?php
      }
      ?>



      <div class="art-head container-fluid">
        <?php
        $section_head = [
          'title'   => 'Дайджест: лучшие бьюти события этой недели',
          'author'  => 'Карина Андреева',
          'publish' => 'Сегодня в 11:47 • 7 минут чтения',
          'tags'    => ['Красота', 'Стиль Жизни']
        ];
        require ( 'template-parts/section_head.php' );

        ?>
      </div>

      <div class="art-body">

        <div class="art-content container-fluid col-mb article" data-sticky-container>

          <div class="socials-sticky" data-sticky-class="is-fixed" data-sticky-for="992">
            <div class="social-links">
              <button type="button" data-sharer="vk" data-url="<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" data-title="some article title" data-caption="some article caption" data-image="<?= URL; ?>img/art/01.jpg" class="social-ico hover-vk grey">
                <span class="ico">
                  <?= $svg->get_ico('vk'); ?>
                </span>
              </button>
              <button type="button" data-sharer="facebook" data-url="<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" data-hashtag="hashtag" class="social-ico hover-fb grey">
                <span class="ico">
                  <?= $svg->get_ico('fb'); ?>
                </span>
              </button>
              <button type="button" data-sharer="pinterest" data-url="<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" data-description="some article description" data-image="<?= URL; ?>img/art/01.jpg" class="social-ico hover-pinterest grey">
                <span class="ico">
                  <?= $svg->get_ico('pinterest'); ?>
                </span>
              </button>
              <button type="button" data-sharer="okru" data-url="<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" data-title="some article title" class="social-ico hover-ok grey">
                <span class="ico">
                  <?= $svg->get_ico('ok'); ?>
                </span>
              </button>
            </div>
            <div class="sticky-bookmarks">
              <label class="bookmark-btn">
                <input type="checkbox" class="save-bookmark-input" name="saveBookmarkInput" id="saveBookmarkInput" data-page="PAGE_INDEX" data-ajax="/_request.php?action=save_bookmark">
                <div class="bookmark-ico has">
                  <?= $svg->get_ico('bookmark_add'); ?>
                </div>
                <div class="bookmark-ico add">
                  <?= $svg->get_ico('bookmark_2_add'); ?>
                </div>
              </label>
            </div>
          </div>


          <div class="row p-left">
            <div class="col-lg-12">

              <h3 class="art-title-lg">Экология</h3>
              <p>
                В мировом океане 5,25 триллиона пластиковых предметов, из которых 269 тысяч тонн пластика плавает на поверхности и образует мусорные острова, а 100 тысяч морских животных умирают от него каждый год.
              </p>
              <h3 class="art-title-lg">Дом Mugler</h3>
              <p>
                Парфюмерный Дом Mugler предлагает поклонникам ароматов стать частью новой экологичной кампании: с июля по 17 ноября 2019 годан на стендах бренда в магазинах Золотое Яблоко вы сможете сдать пустой флакон любого бренда на переработку, а взамен получить пустой флакон Angel, Alien или Aura MUGLER и скидку при заполнении через сервис Mugler Source. Каждые три месяца флаконы будут вывезены и утилизированы на полигонах.
              </p>
              <a href="<?= URL; ?>img/art/04.jpg" data-fancybox class="right image">
                <img src="<?= URL; ?>img/art/04.jpg" alt="как я две недели тестировала Achronim">
              </a>
              <p>
                Среди новинок помады с эффектом MATTE и SHEER, плампер, бальзам, блеск и прозрачный контур для губ, бронзатор и мерцающая пудра для тела. Средства названы в честь бельевых бестселлеров британского бренда.
                В составе матовых помад масло дикого манго, которое не позволяет матовой основе высушить губы. Всего вышло три оттенка: ярко-розовый Adara, рубиново-классный Lyssandra и насыщенный пурпурный Mazzy. У помад с глянцевым эффектом SHEER в составе экстракт личи и аргановое масло, в палитре этой линейки: фуксия Dakotta, алая Annoushka и нюдовая Lacy.
              </p>
              <p>
                Масло авокадо (природный источник витамина А и жирных кислот) – это прекрасный антиоксидант и иммунностимулятор. Этот ингредиент насыщает кожу питательными веществами, приводит к регенерации клеток кожи, а значит, и к быстрому восстановлению липидного барьера.
              </p>
              <a href="<?= URL; ?>img/art/05.jpg" data-fancybox class="left image">
                <img src="<?= URL; ?>img/art/05.jpg" alt="как я две недели тестировала Achronim">
              </a>
              <p>
                Бета-каротин (провитамин А) - мощный антиоксидант, оказывает заживляющее, фотопротекторное и противовоспалительное действие.
              </p>
              <p>
                Масло карите, оно же масло ши — известный антиоксидант, который не только широко используется у Африканского населения для лечения заболеваний кожи, но и является популярным компонентом во многих косметических средствах. За счет содержащихся в нем витамина Е, коричной кислоты и жирных кислот он питает кожу, улучшает местную микроциркуляцию,
                защищает и восстанавливает кожу после УФ воздействия Итальянская актриса Моника Беллуччи дала откровенное интервью журналу Madame Figaro, в котором порассуждала о возрасте, пластических операциях и… личной жизни.
                Прежде всего, знаменитость отметила, что уже в старших классах школы хотела быть самой красивой и даже делала себе макияж. Правда, учителя ее стремления к совершенству не поддерживали и заставляли смывать косметику. «Только моя бабушка считала, что я все делала правильно», - поделилась воспоминаниями Моника.
              </p>
            </div>
          </div>

          <div class="sticky-end-container"></div>
        </div>

        <div class="container-fluid">
          <?php
          $hide_share = true;
          require ('template-parts/art_footer.php');
          ?>
        </div>

      </div>

    </div>

  </div>
</div>
