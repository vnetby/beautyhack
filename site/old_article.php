<?php
$artHTML = get_old_art_content("https://new.beautyhack.ru/telo/fitnes-gid/testovaya-statya");
$artHTML2 = get_old_art_content("https://new.beautyhack.ru/krasota/testovaya-2");
?>

<div class="main-content article-page" id="mainContent">
  <div class="art-ajax-container" id="artAjaxContainer">
    <div class="art-page" data-next="?page=old_article" data-page-title="old article test">

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
        require('template-parts/section_head.php');

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
              <label class="bookmark-btn remove-bookmark">
                <input type="checkbox" class="save-bookmark-input" name="saveBookmarkInput" id="saveBookmarkInput" data-page="PAGE_INDEX" data-ajax="/_request.php?action=save_bookmark" checked>
                <div class="bookmark-ico has">
                  <?= $svg->get_ico('bookmark_add'); ?>
                </div>
                <div class="bookmark-ico add">
                  <?= $svg->get_ico('bookmark_2_add'); ?>
                </div>
              </label>
            </div>

          </div>

          <?php
          echo $artHTML;

          echo $artHTML2;
          ?>
          <div class="sticky-end-container"></div>

        </div>

      </div>

      <?php
      // require('template-parts/read_also.php');
      ?>


    </div>
  </div>
</div>