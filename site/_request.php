<?php
define('URL', 'http://beautyhack2.vnetby.net/');
define('ABSPATH', realpath(dirname(__FILE__)) . '/');

/*

RULES FOR AJAX FORM :

$_POST['input_name'] => input value;
$_POST['origin']     => 'url';


Response JSON keys:

type => 'success' / 'error',

inputs => [
'input_id' => 'message' // display message under input
],

'html' => 'html string' // replace container with class ajax-form;

'alert' => 'html string' // display fancy modal with html content;

'redirect' => 'url',

'clear' => false/true || Array( inputId ) // clear inputs value

*/





if (isset($_GET['action'])) {




  if ($_GET['action'] === 'login') {
    echo json_encode([
      'type'     => 'success',
      'redirect' => $_POST['origin']
    ]);
    exit;
  }



  if ($_GET['action'] === 'register') {
    echo json_encode([
      'type'   => 'error',
      'inputs' => [
        'registerEmail' => 'Уже существует'
      ]
    ]);
    exit;
  }



  if ($_GET['action'] === 'subscribe') {
    ob_start();
    require(ABSPATH . 'template-parts/ajax_thank_subscribe.php');
    $thank_subscribe = ob_get_clean();

    echo json_encode([
      'type'  => 'success',
      'alert' => $thank_subscribe,
      'clear' => true
    ]);
    exit;
  }


  if ($_GET['action'] === 'recover') {
    echo json_encode([
      'type'   => 'success',
      'inputs' => [
        'recoverEmail' => 'Пароль был выслан'
      ],
      'clear' => true
    ]);
    exit;
  }



  if ($_GET['action'] === 'search') {
    require(ABSPATH . 'template-parts/ajax_search_result.php');
    exit;
  }




  if ($_GET['action'] === 'vote_article') {
    if ($_POST['type'] === 'like') {
      echo 'like';
      exit;
    }

    if ($_POST['type'] === 'dislike') {
      echo 'dislike';
      exit;
    }
  }




  if ($_GET['action'] === 'save_bookmark') {
    $page = $_POST['page'];

    $save = $_POST['save'];

    if ($save === 'true') {
      // SAVE BOOKMARK
    } else {
      // REMOVE FROM BOOKMARKS
    }

    exit;
  }



  if ($_GET['action'] === 'vote_battle') {

    if (isset($_POST['vote'])) {
      $vote = $_POST['vote'];
      $battleId = $_GET['id'];

      // .... some action
    }


    $percent = [30, 45, 14, 1, 0, 33, 100, 23, 21, 14];

    $rand = rand(0, 9);

    echo json_encode([
      'firstPercent' => $percent[$rand]
      // 'finish' => true
    ]);

    exit;
  }



  if ($_GET['action'] === 'save_profile') {
    ob_start();
    require(ABSPATH . 'template-parts/ajax_save_profile.php');
    $save_profile = ob_get_clean();

    echo json_encode([
      'type'  => 'success',
      'alert' => $save_profile,
      'clear' => ['profileOldPass', 'profilePass', 'profilePassRepeat']
    ]);
    exit;
    // echo json_encode([
    //   'type'  => 'error',
    //   'inputs' => [
    //     'profilePass' => 'Пароль не совпадает',
    //     'profilePassRepeat' => 'Пароль не совпадает'
    //   ]
    // ]);
  }




  if ($_GET['action'] === 'begin_test') {
    $testId = $_POST['testId'];

    if (isset($_POST['testResult'])) {
      $testResult = json_decode($_POST['testResult']);
      require(ABSPATH . 'template-parts/ajax_test_result.php');
      exit;
    } else {
      echo json_encode([
        [
          'question' => 'А как обстоят дела с румянцем?',
          'answers' => ['Все отлично! Я свежа, как влюбленная Джульетта', 'Когда как. Все зависит от моего эмоционального состояния', 'Моей аристократичной коже румянец противопоказан!']
        ],
        [
          'question' => 'some question',
          'answers' => ['first answer', 'second answer', 'third answer']
        ]
        // [
        //   'question' => 'some question',
        //   'answers' => ['first answer', 'second answer', 'third answer']
        // ],
        // [
        //   'question' => 'some question',
        //   'answers' => ['first answer', 'second answer', 'third answer']
        // ],
        // [
        //   'question' => 'some question',
        //   'answers' => ['first answer', 'second answer', 'third answer']
        // ],
        // [
        //   'question' => 'some question',
        //   'answers' => ['first answer', 'second answer', 'third answer']
        // ],
        // [
        //   'question' => 'some question',
        //   'answers' => ['first answer', 'second answer', 'third answer']
        // ]
      ]);
    }
  }




  if ($_GET['action'] === 'js_quiz') {
    require(ABSPATH . 'template-parts/ajax_quiz_result2.php');
    exit;

    $quizId = $_POST['quizId'];

    if (isset($_POST['quizResult'])) {
      $trueAnswers = $_POST['quizResult'];
      $time = $_POST['time']; // 00:00:00

      require(ABSPATH . 'template-parts/ajax_quiz_result.php');
    } else {
      echo json_encode([
        [
          'question' => 'А кто от рождения Шарлиз Терон?',
          'answers' => [['Брюнетка. Она же родом из Южной Африки'], ['Блондинка, тут без вариантов. Это очевидно', true], ['Русая. К зеленым глазам такой оттенок подходит лучше всего']]
        ],
        [
          'question' => 'some question',
          'answers' => [['first answer'], ['second answer', true], ['third answer']]
        ],
        [
          'question' => 'some question',
          'answers' => [['first answer'], ['second answer', true], ['third answer']]
        ]
      ]);
    }
  }
}
