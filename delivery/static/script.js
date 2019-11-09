$(document).ready(function(){

    AOS.init();

    $('.display-choices-products').slick({
        lazyLoad: 'ondemand',
        dots: true,
        infinite: false,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.melhores-rest').slick({
        lazyLoad: 'ondemand',
        dots: true,
        infinite: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    $(window).scroll(function () {
        
        let nav;

        if($('.bottom-header').css('display') === 'none'){
            nav = '.header';
        }else{
            nav = '.bottom-header';
        }
        
        if($(this).scrollTop() > 110){
            $(nav).addClass("fixed-nav")
        }else{
            $(nav).removeClass("fixed-nav")
        }
    });

    //Dasboard Actions

    ///Abrir Modal de Vendas
    $('.ver-todos-order').click(function(){
        $('.modal-more-orders').css('display', 'block');
    })

    //Fechar Modal de Vendas
    $('#close-all-orders').click(function(){
        $('.modal-more-orders').css('display', 'none');
    })

    //Signup
    $("#signup").click(function(){
        $('.main-container-login').addClass('right-panel-active');
    })

    //Login
    $("#login").click(function(){
        $('.main-container-login').removeClass('right-panel-active');
        console.log('eae')
    })

    //Open Carrinho de compras
    $('.shopping-cart').click(function(){
        $('.display-shopping-cart').css({
          display: 'block',
          width: '350px',
      });
    })

    //Fechar Carrinho de Compras
    $('.closing-menu').click(function(){
        $('.display-shopping-cart').css({
            display: 'none',
            width: '0',
            transition: 'all .5s linear',
        });
    })

    //Open notificação
    $('.open-not').click(function(){

      $('.display-notificacoes').css({
          display: 'block',
          width: '350px',
          zIndex: '6'
      });
  })

  //Fechar Notificação
  $('#close-not').click(function(){
      $('.display-notificacoes').css({
          display: 'none',
          width: '0',
          zIndex: '0',
          transition: 'all .5s linear',
      });
  })

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //Abrir Menu Mobile
    $('.menu-m i').click(function(){
        $('.menu-mobile-wrapper').css({
            display: 'block',
            opacity: '1',
        })
    })

    //Fecha Menu Mobile
    $('#close-full-menu').click(function(){
        $('.menu-mobile-wrapper').css({
            display: 'none',
            opacity: '0',
        })
    })

    //Abre carrinho no icone de carrinho para mobilão
    $('.mobile-cart').click(function(){
      if (window.matchMedia("(max-width: 768px)").matches) {
        $('.display-shopping-cart').css({
            display: 'block',
            width: '100%',
        });
      } else {
          $('.display-shopping-cart').css({
            display: 'block',
            width: '350px',
        });
      }
    })

    //Abrir Search Mobile
    $('.search-m i').click(function(){
      $('.search-mobile-wrapper').css({
          display: 'flex',
          opacity: '1',
      })
  })

  //Fecha Search Mobile
  $('#close-full-search').click(function(){
      $('.search-mobile-wrapper').css({
          display: 'none',
          opacity: '0',
      })
  })

  //Add borda vermelha
  $('.search-nav form input[name=query]').blur(function(){
    $(this).css({
      borderBottom: '1px solid red',
    })
  })

  //Menu Dashboard
    // $('.menu-toggle').click(function(){
    //   $('.click_toggle').hide();

    //   $('.sidenav').css({
    //     width: '50px'
    //   });

    //   $('.main-content-dashboard').css({
    //     width: 'calc(100% - 50px)',
    //     marginLeft: '50px'
    //   });

    //   $('.sidenav h1 a span').html('F')

    //   $('.sidenav h1').css({
    //     padding: '24px 8px'
    //   })
    // })

    function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }

    //Marca notificação como lida
  
    $('.check').click(function(){
        $.ajax({
          type: "POST",
          url: "/lida",
          data: {
            id: $(this).parent().attr('id'),
            csrfmiddlewaretoken: getCookie('csrftoken'),
            lida: 1
          },
          dataType: 'json',
          complete: function (response) {
              // console.log(response.responseJSON.notificacoes[0]);
              
              if(response.responseJSON.status === 'Success'){
                
                if(response.responseJSON.notificacoes.length){
                  var url = response.responseJSON.notificacoes[0];
                tem_not = $('.notificacoes').find(`li#${url.id}`).fadeOut(300, function() { $(this).remove()});

                $('.notificacoes').find(`li#${url.id}`).fadeOut(300, function() { $(this).remove()});

                $('.total-notificacoes span').html($('.notificacoes li').length - 1)
                
                if($('.total-notificacoes span').html() == '0'){
                  $('.notificacoes').append('<p class="read-all">Você leu todas as suas notificações!!<p>')
                }
                
                var options = {
                  settings: {
                    duration: 2000
                  }
                };
                iqwerty.toast.Toast('Mensagem Marcado como lida!', options);
                }
              }else{
                console.log('fudeu');
                
              }

          }
        });
    })

    //Pega os produtos
    $('#load-products').click(function(){

      $('#todos_produtos > tbody > tr').remove()

      $.ajax({
        type: "get",
        url: "/produtos/todos",
        dataType: "json",

        beforeSend: function(){
          $('body').loading({
            stoppable: true
          });
        },
        success: function (data) {
          let produtos;

          data.produtos.forEach(prod => {

            produtos += `
            <tr id="${prod.id}" class="edit-prod">
            <td>${prod.id}</td>
            <td><img src="/media/${prod.foto}" alt="${prod.nome}"></td>
            <td>${prod.nome}</td>
            <td>
              ${prod.descricao.slice(0,7)}...
            </td>
            <td>
              <button class="btn updateBtn" data-id="${prod.id}">Editar</button>
            </td>
            <td>
              <button class="btn deleteBtn btn-danger" data-id="${prod.id}">Deletar</button>
            </td>
          </tr>`;
          });

          $('#todos_produtos > tbody').append(produtos)

          $('body').loading('stop');
        }
      });
    })

    $('#todos_produtos').on('click', $('.updateBtn'), function(){
        $.ajax({
          type: "method",
          url: "url",
          data: "data",
          dataType: "dataType",
          success: function (response) {
            
          }
        });
    })

    $('.edit-prod').click(function(){

      id = $(this).attr('id')

      $.ajax({
        type: "post",
        url: `get-produto-editar/`,
        data: {
          id: id,
          csrfmiddlewaretoken: getCookie('csrftoken'),
        },
        dataType: "json",
        complete: function (response) {
          modal = response.responseText;

          $(document).find('.open-modal').remove()
          $('.content-produtos').append('<div class="open-modal"><div class="modal-edit" ><div class="header-edit"><i class="fas fa-times" id="close-edit"></i></div><form method="POST" enctype="multipart/form-data">'+ modal +'<button type="submit" id="salvar_editar" value=' + id +'>Salvar</button></form></div></div>')
        }
      });

    });

    $('.content-produtos').on('click', ".header-edit .fa-times" ,function(){
      $('.open-modal').css('display', 'none');
      $('.modal-edit').css('display', 'none');
    })

    $('.content-produtos').on('click', '#salvar_editar' ,function(e){
      e.preventDefault();
      
      data = $('.modal-edit form').serializeArray();
      
      data_JSON = JSON.stringify(data)

      $.ajax({
        type: "POST",
        url: "/save-produto-editar",
        data: {
          data: data_JSON,
          csrfmiddlewaretoken: getCookie('csrftoken'),
          id: $('#salvar_editar').val(),
        },
        dataType: "dataType",
        complete: function (response) {

          console.log(response)
          var parsed = JSON.parse(response.responseText);

          
          if(parsed.status == 'success'){
            var options = {
              settings: {
                duration: 2000
              }
            };
            iqwerty.toast.Toast('Produto atualizado!', options);

            $('.open-modal').css('display', 'none');
            $('.modal-edit').css('display', 'none');
          }
        }
      });

    })


})