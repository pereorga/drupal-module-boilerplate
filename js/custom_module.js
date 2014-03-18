/**
 * @file custom_module.js
 * Custom Module main JavaScript file.
 *
 * You will need to get rid of the comments.
 * For how to add this file to your module, see https://drupal.org/node/304255
 */

// The first and last lines are a closure that allow us to use the `$()`
// shortcut, instead of the longer `jQuery()` function.
(function ($) {

  // Implementing a Drupal JavaScript behavior allow us to run code when the
  // page is ready and every time elements are added via the Drupal AJAX API.
  Drupal.behaviors.customModule = {

    // The `context` and `settings` arguments are specific to when and where
    // this is being executed.
    attach: function (context, settings) {

      // Here starts the real functionality.
      console.log('Hello world');

      // We use `once()` when we only want to run something once. The code
      // below will behave very similarly to what would do inside
      // `jQuery(document).ready()`.
      $('span.custom-module', context).once().text(Drupal.t('Hello world'));
    }
  };
})(jQuery);
