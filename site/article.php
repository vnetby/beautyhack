<div class="main-content article-page" id="mainContent">

  <div class="art-ajax-container" id="artAjaxContainer">

    <div class="art-page" data-next="?page=article2" data-page-title="article 1">

      <?php
      require('template-parts/better_in_month.php');
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
              <a href="/_request.php?action=save_bookmark" data-page="<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" class="save-bookmark-link">
                <span class="ico">
                  <?= $svg->get_ico('bookmarks_border'); ?>
                </span>
              </a>
            </div>
          </div>


          <div class="row p-left">
            <div class="col-lg-12">

              <div class="banner right">
                <div class="shadow-both display-desktop display-tablet">
                  <a href="#" class="thumb mb-0 hover-overlay">
                    <div class="ajax-image" data-lg="<?= URL; ?>img/true_banners/banner_300_600.jpg" data-alt="HM banner"></div>
                  </a>
                </div>
                <a href="#" class="display-mobile">
                  <div class="ajax-image" data-sm="<?= URL; ?>/img/true_banners/banner_320_250.jpg"></div>
                </a>
              </div>

              <h3 class="art-title-lg">Экология</h3>
              <p>
                В мировом океане 5,25 триллиона пластиковых предметов, из которых 269 тысяч тонн пластика плавает на поверхности и образует мусорные острова, а 100 тысяч морских животных умирают от него каждый год.
              </p>
              <h3 class="art-title-lg">Дом Mugler</h3>
              <p>
                Парфюмерный Дом Mugler предлагает поклонникам ароматов стать частью новой экологичной кампании: с июля по 17 ноября 2019 годан на стендах бренда в магазинах Золотое Яблоко вы сможете сдать пустой флакон любого бренда на переработку, а взамен получить пустой флакон Angel, Alien или Aura MUGLER и скидку при заполнении через сервис Mugler Source. Каждые три месяца флаконы будут вывезены и утилизированы на полигонах.
              </p>
              <p>
                В составе бальзама для губ Lindie витамин Е и масло ши, которые питают и активно увлажняют кожу губ. Плампер Plump делает губы объемнее за счет растительных природных филлеров. Блеск для губ Sparkle оставляет на губах мерцающие частички, его можно использовать как индивидуальное средство для губ, так и поверх помады. Прозрачный карандаш для губ Ghost Writer специально придуман для того, чтобы средства для губ не выходили за контур, его можно наносить с помадами и бальзамами самых разных оттенков.
              </p>
            </div>
          </div>


          <div class="row">
            <div class="col-lg-12">
              <div class="art-full-slider-nav over-container">
                <div class="slider-preview full-slider">
                  <div class="slick-item">
                    <img src="<?= URL; ?>img/art_full_slider/01.jpg" alt="slider image">
                  </div>
                  <div class="slick-item">
                    <img src="<?= URL; ?>img/art_full_slider/02.jpg" alt="slider image">
                  </div>
                  <div class="slick-item">
                    <img src="<?= URL; ?>img/art_full_slider/03.jpg" alt="slider image">
                  </div>
                  <div class="slick-item">
                    <img src="<?= URL; ?>img/art_full_slider/04.jpg" alt="slider image">
                  </div>
                </div>
                <div class="slider-nav">
                  <div class="slick-item">
                    <img src="<?= URL; ?>img/art_full_slider/01_thumb.jpg" alt="slider image">
                  </div>
                  <div class="slick-item">
                    <img src="<?= URL; ?>img/art_full_slider/02.jpg" alt="slider image">
                  </div>
                  <div class="slick-item">
                    <img src="<?= URL; ?>img/art_full_slider/03.jpg" alt="slider image">
                  </div>
                  <div class="slick-item">
                    <img src="<?= URL; ?>img/art_full_slider/04.jpg" alt="slider image">
                  </div>
                </div>
              </div>

            </div>
          </div>



          <div class="row center-row">
            <div class="col-lg-12">
              Среди новинок помады с эффектом MATTE и SHEER, плампер, бальзам, блеск и прозрачный контур для губ, бронзатор и мерцающая пудра для тела. Средства названы в честь бельевых бестселлеров британского бренда.
              В составе матовых помад масло дикого манго, которое не позволяет матовой основе высушить губы. Всего вышло три оттенка: ярко-розовый Adara, рубиново-классный Lyssandra и насыщенный пурпурный Mazzy. У помад с глянцевым эффектом SHEER в составе экстракт личи и аргановое масло, в палитре этой линейки: фуксия Dakotta, алая Annoushka и нюдовая Lacy.
            </div>
          </div>




          <div class="row">
            <div class="col-lg-12">
              <div class="sm-full-content">
                <a href="<?= URL; ?>img/art/01.jpg" data-fancybox>
                  <img src="<?= URL; ?>img/art/01.jpg" alt="art image" class="full-width">
                </a>
              </div>
            </div>
          </div>



          <div class="row center-row">

            <div class="col-lg-6">
              <a href="<?= URL; ?>img/art/02.jpg" data-fancybox>
                <img src="<?= URL; ?>img/art/02.jpg" alt="art image" class="full-width">
              </a>
            </div>

            <div class="col-lg-6">
              <a href="<?= URL; ?>img/art/03.jpg" data-fancybox>
                <img src="<?= URL; ?>img/art/03.jpg" alt="art image" class="full-width">
              </a>
            </div>

            <div class="col-lg-12">

              <p>
                Масло авокадо (природный источник витамина А и жирных кислот) – это прекрасный антиоксидант и иммунностимулятор. Этот ингредиент насыщает кожу питательными веществами, приводит к регенерации клеток кожи, а значит, и к быстрому восстановлению липидного барьера.
              </p>
              <p>
                Бета-каротин (провитамин А) - мощный антиоксидант, оказывает заживляющее, фотопротекторное и противовоспалительное действие.
              </p>
              <p>
                Масло карите, оно же масло ши — известный антиоксидант, который не только широко используется у Африканского населения для лечения заболеваний кожи, но и является популярным компонентом во многих косметических средствах. За счет содержащихся в нем витамина Е, коричной кислоты и жирных кислот он питает кожу, улучшает местную микроциркуляцию, защищает и восстанавливает кожу после УФ воздействия.
              </p>

              <div class="banner display-mobile mb-3">
                <a href="#" class="dashed-shadow">
                  <span class="shadow"></span>
                  <div class="ajax-image" data-sm="<?= URL; ?>/img/true_banners/banner_300_250.jpg"></div>
                </a>
              </div>

              <h3 class="art-title-md">Популярные ароматы:</h3>

              <ul>
                <li>Angel – $320</li>
                <li>Aura Mugler – $240</li>
                <li>Mugler Cologne – $280</li>
                <li>Les Exceptions – $140</li>
                <li>Angel Eau Croisiere – $380</li>
                <li>Candles – $490</li>
              </ul>

            </div>



            <div class="col-lg-12 author-block">
              <div class="avatar">
                <img src="<?= URL; ?>img/authors/03.jpg" alt="avatar">
              </div>
              <div class="author-head">
                <h3 class="art-title-md">Татьяна Якимова</h3>
                <h4 class="art-sub-title">Журналист, бьюти-эксперт. Мама четверых детей. Мисс Мира 2000</h4>
              </div>
              <div class="author-content">
                <p>
                  Крем с таким составом подойдет тонкой чувствительной коже век, в частности, с нарушенным гидролипидным барьером. Обычно такая кожа наблюдается у обладателей мелкоморщинистого типа старения. Я бы рекомендовала использовать это средство в качестве ночного крема, а также для восстановления кожи век после УФ, пилингов, лазеров и других повреждающих манипуляций.
                </p>
              </div>
            </div>


            <div class="col-lg-12">
              <h3 class="art-title-lg">Выходные на веранде в Holy Basil Cafe</h3>
              <p>
                Эти выходные секретная летняя веранда Holy Basil Cafe на крыше ZARYAD.studio проводит с пользой не только для красоты, но и для настроения.
              </p>
              <p>
                В субботу 27 июля на крыше Бадаевского завода можно будет бесплатно сделать массаж лица ON THE RUN от проекта The-Face-Only, а в воскресенье 28 июля шарик любого веганского мороженого будет стоить 50 рублей. Шоколадное с конопляным протеином и ассая сорбет с семенами конопли – осталось только выбрать вкус. На мероприятии выступит 3 популярные молодежные группы. Лайн-ап уже известен:
              </p>
              <ol>
                <li>On-the-Go – 17:25 – 18:00</li>
                <li>Tesla Boy – 18:25 – 19:00</li>
                <li>Super Besse – 19:25 – 20:00</li>
              </ol>
            </div>

          </div>



          <div class="row">
            <div class="col-lg-12">
              <div class="art-big-slider full-slider slick over-container">
                <div class="slick-item">
                  <img src="<?= URL; ?>img/art_big_slider/01.jpg" alt="big slider">
                </div>
                <div class="slick-item">
                  <img src="<?= URL; ?>img/art_big_slider/02.jpg" alt="big slider">
                </div>
              </div>
            </div>
          </div>




          <div class="row center-row">
            <div class="col-lg-12">
              <h3 class="art-title-lg">
                Моника Беллуччи о пластических<br>
                операциях
              </h3>
              <p>
                Итальянская актриса Моника Беллуччи дала откровенное интервью журналу Madame Figaro, в котором порассуждала о возрасте, пластических операциях и… личной жизни.
              </p>
              <div class="dashed-border citation pt-4 pb-4 mb-4 center">
                <h3 class="fs-l mb-4">
                  Я не осуждаю людей, которые пользуются услугами пластических хирургов
                </h3>
                <span>
                  – Моника Беллучи
                </span>
              </div>
              <p>
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



      <?php
      require ('template-parts/read_also.php');
      ?>






    </div>



  </div>
</div>
