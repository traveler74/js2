$(document).ready(function () {
  $('#game-container').hide()
  $('#start-container').hide()
  $('#result-container').hide()
  $('#reset').hide()
  window.i = 0
  console.log('i ' + i)
})

$('#reset').click(function () {
  $('#game-container').hide()
  $('#start-container').hide()
  $('#result-container').hide()
  $('#rules-container').show()
  $('#reset').hide()
  $('#result').hide().text('')
  $('#input_1').val(null)
  $('#risk').show()
  window.i = 0
})

$('#ready').click(function () {
  window.random = Number (Math.round (1 - 0.5 + Math.random() * (15 - 1 + 1)))

  $('#rules-container').hide()
  $('#result-container').show()
  $('#start-container').show()
  $('#game-container').show()
  $('#input_1').show()
  $('#result').show()
  $('#attempt').text('Осталось попыток: 3')

  console.log('i ' + i)
  console.log('random ' + random)
})

$('#risk').click(function () {
  let i;
  let player_number = $('#input_1').val()

  if (((player_number < 0) || (player_number > 15)) && (window.i < 2)) {
    $('#result').text('Плохо изучил инструкцию?')
    $('#attempt').text('Осталось попыток: '+ (2 - window.i))
  }
    else if (((player_number == 0) || (player_number == '')) && (window.i < 2)) {
      $('#result').text('А ты шутник?')
      $('#attempt').text('Осталось попыток: '+ (2 - window.i))
    }
      else if ((isNaN(player_number)) && (window.i < 2)) {
        $('#result').text('Зря тратишь мое время!')
        $('#attempt').text('Осталось попыток: '+ (2 - window.i))
      }
        else if ((Number (player_number) === random) && (window.i <= 2)) {
          $('#result').text('Сегодня рыбы будут голодны')
          $('#attempt').text('Удача!').css('color','08de08')
          $('#risk').hide()
          $('#input_1').hide()
          $('#reset').show()
        }
          else if ((Number (player_number) < random) && (window.i < 2)) {
            $('#result').text('Мое число БОЛЬШЕ!')
            $('#attempt').text('Осталось попыток: ' + (2 - window.i))
          }
            else if ((Number (player_number) > random) && (window.i < 2)) {
              $('#result').text('Мое число меньше!')
              $('#attempt').text('Осталось попыток: '+ (2 - window.i))
            }
              else {
                $('#result').text(' Не повезло...')
                $('#attempt').text('Поражение!')
                $('#risk').hide()
                $('#input_1').hide()
                $('#reset').show()
              }

  window.i++
  console.log('i ' + window.i)
})
