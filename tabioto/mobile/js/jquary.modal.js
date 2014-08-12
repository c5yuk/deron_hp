/// require jQuery
$(function(){
    $(document).ready(function(){
        $('a.modal').each(function(){
            $(this).attr('data-href', $(this).attr('href'));
            $(this).attr('href', '#modal');
        });
    $('a[href=#modal]').bind('click', function(){
        $('body').append(
                $('<div class="modal-back"></div>')
                .css('position',            'absolute')
                .css('top',                 '0')
                .css('left',                '0')
                .css('width',               '100%')
                .css('height',              '100%')
                .css('background-color',    '#696969')
                .css('filter',              'alpha(opacity=80)')
                .css('-moz-opacity',        '0.8')
                .css('opacity',             '0.8')
                .bind('click', function(){
                    removeModal();
                })
            )
            .append(
                $('<div class="modal-front"></div>')
                .css('position',        'absolute')
                .css('top',             '5%')
                .css('left',            '5%')
                .css('width',           '90%')
                .css('height',          '90%')
                .css('margin',          'auto')
                .bind('click', function(){
                    removeModal();
                })
                .append(
                    $('<div></div>')
                    .css('text-align',              'right')
                    .append($('<span>ﾃ</span>')
                        .css('text-align',              'center')
                        .css('background-color',        '#000000')
                        .css('color',                   '#dddddd')
                        .css('border',                  '4px solid #ffffff')
                        .css('font-weight',             'bold')
                        .css('font-size',               'large')
                        .css('border-radius',           '8px')
                        .css('-webkit-border-radius',   '8px')
                        .css('-moz-border-radius',      '8px')
                        .css('cursor',                  'pointer')
                        .bind('click', function(){
                            removeModal();
                        })
                    )
                )
                .append(
                    $('<div class="modal-data"></div>')
                    .bind('click', function(){
                        return false;
                    })
                )
        );
        $.get(
            $(this).attr('data-href'),
            function(data){
                $('div.modal-data').append(data)
            }
        );
        return false;
    });
  });
  function removeModal() {
    $('div.modal-back').remove();
    $('div.modal-front').remove();
  }
});