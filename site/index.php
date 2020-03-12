<?php
header("Access-Control-Allow-Origin: *");

define('URL', 'http://beautyhack.t.vnetby.net/');
define('ABSPATH', realpath(dirname(__FILE__)) . '/');

require('includes/functions.php');

require('includes/class_svg_icons.php');
$svg = new SvgIcons;

$login = false;

if (isset($_GET['login'])) {
  if ($_GET['login'] === 'true') {
    $login = true;
  }
}


$headers = getallheaders();
$isAjax = false;
if (isset($headers['ajaxLoadArt'])) $isAjax = true;



$page = false;

if (!isset($_GET['page'])) {
  $page = 'home.php';
} else {
  $page = $_GET['page'] . '.php';
}

?>
<html>


<head>

  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="stylesheet" href="<?= URL; ?>assets/assets.min.css">
  <link rel="stylesheet" href="<?= URL; ?>css/main.min.css">
  <script>
    var back_dates = {
      SRC: '<?= URL; ?>'
    }
  </script>
  <script src="<?= URL; ?>js/adriver.core.2.js"></script>
</head>

<body data-mobile="576" data-tablet="992" data-desktop="1280">
  <?php
  if ($page === 'home.php' || $page === 'list_of_articles.php' || $page === 'article.php' || $page === 'article2.php' || $page === 'old_article.php') {
    require('template-parts/brand_site_background.php');
  }
  ?>
  <div class="main" id="main">
    <?php
    require('template-parts/header.php');

    require($page);

    require('template-parts/footer.php');
    ?>
  </div>

  <?php
  require('template-parts/modals.php');
  ?>
  <script src="<?= URL; ?>assets/assets.min.js"></script>
  <script src="<?= URL; ?>js/main.min.js"></script>
</body>

</html>