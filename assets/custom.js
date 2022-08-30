$(document).ready(function(){
    $(document).on('click', 'ul.tt-options-swatch li', function(){
        var new_var_id = $(this).attr('data-var_id');
        var link_to_update = $(this).closest('.tt-product').find('.tt-image-box a').attr('href');
        var new_url = '';
        console.log(link_to_update)
        if(link_to_update.includes('variant=')){
            link_to_update_split = link_to_update.split("?");
            new_url = link_to_update_split[0] + '?variant=' + new_var_id;
        }else{
            new_url = link_to_update + '?variant=' + new_var_id;
        }
        $(this).closest('.tt-product').find('a').attr('href', new_url);
    })
});