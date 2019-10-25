<div class="art-footer">
  <?php
  global $hide_share;
  ?>
  <div class="row center-row art-controls-row <?= $hide_share ? 'hide-tablet' : ''; ?>">
    <div class="col-lg-12 mb-0">
      <div class="art-controls">
        <div class="socials">
          <span>Поделиться:</span>
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
        </div>
        <div class="save-bookmark">
          <label class="bookmark-btn add-bookmark">
            <input type="checkbox" class="save-bookmark-input" name="saveBookmarkInput" id="saveBookmarkInputFoot" data-has-label="Удалить из закладок" data-add-label="Сохранить в закладки" data-page="PAGE_INDEX" data-ajax="/_request.php?action=save_bookmark">
            <div class="bookmark-ico has">
              <?= $svg->get_ico('bookmark_add'); ?>
            </div>
            <div class="bookmark-ico add">
              <?= $svg->get_ico('bookmark_2_add'); ?>
            </div>
          </label>
          <label for="saveBookmarkInputFoot" class="label grey">Сохранить в закладки</label>
        </div>
      </div>
    </div>
  </div>


  <div class="row review-block center-row-lg">
    <div class="col-lg-12 review-content">
      <h3 class="art-title-md">
        Была ли полезна статья?
      </h3>
      <div class="vote-block has-preloader" data-ajax="/_request.php?action=vote_article">
        <a href="#" class="like-vote fs-xxl">
          <img src="<?= URL; ?>img/icons/smile_love.png" alt="like">
          <span>Да</span>
        </a>
        <span class="vote-div">или</span>
        <a href="#" class="dislike-vote fs-xxl">
          <img src="<?= URL; ?>img/icons/smile_sad.png" alt="like">
          <span>Нет</span>
        </a>
      </div>
      <div class="comments-count fs-xl">Комментарии (12)</div>
      <div class="bnt-row center">
        <a href="#" class="view-comments btn black">Посмотреть комментарии</a>
      </div>
      <div class="comments-container">
        <iframe src="https://disqus.com/embed/comments/?base=default&amp;f=beautyhack1&amp;t_i=5315&amp;t_u=https%3A%2F%2Fbeautyhack.ru%2Fputeshestviya%2Fkak-brend-avene-lechit-atopicheskiy-dermatit-s-pomoschyu-termalnoy-vody&amp;t_d=%D0%9A%D0%B0%D0%BA%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%20Avene%20%D0%BB%D0%B5%D1%87%D0%B8%D1%82%20%D0%B0%D1%82%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B4%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%82%20%D1%81%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E%20%D1%82%D0%B5%D1%80%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D0%B2%D0%BE%D0%B4%D1%8B%3F&amp;t_t=%D0%9A%D0%B0%D0%BA%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%20Avene%20%D0%BB%D0%B5%D1%87%D0%B8%D1%82%20%D0%B0%D1%82%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B4%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%82%20%D1%81%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E%20%D1%82%D0%B5%D1%80%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D0%B2%D0%BE%D0%B4%D1%8B%3F&amp;s_o=default#version=6546132fc1e26b55e9024fd962f2a03b" width="" height=""></iframe>
      </div>
    </div>
  </div>




</div>
