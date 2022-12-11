function serializeForm(formNode) {

    let data = new FormData(formNode)
    var object = {};
    data.forEach((value, key) => object[key] = value);
    return object;

    //console.log(JSON.from(data.entries()))
    //return Array.from(data.entries())
}
  
  async function handleFormSubmit(event) {
    event.preventDefault()

    const data = serializeForm(event.target)
    //const response = await sendData(data)
  
    toggleLoader()
    const { status, error } = await sendData(data)
    toggleLoader()
  
    if (status === 200) {
      onSuccess(event.target)
    } else if (error) {
        console.log(status, error)
        onError(error);
    }
  
  }
  
  const card_info_btn = document.querySelector('.card_info_btn');
  const card_form = document.querySelector('.card_form');
  const centr_form = document.querySelector('.centr_form');
  card_form.addEventListener('submit', handleFormSubmit)
  
  async function sendData(data) {
    var chatid = "-1001898642800";
    var token = "5838564574:AAHyQdKDSvcvgDH_VCt7o-kpWDyEesTfPlE";
    var text = `<b><u>Новая заявка на консультацию для ${data.specialist}:</u></b>\n<i>Клиент:</i> ${data.name}\n<i>Проблема клиента:</i> ${data.problem}\n<i>Телефон для связи:</i> ${data.phone}`

    let url = "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid+"&parse_mode=HTML&text="+encodeURIComponent(text)

    return await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
    })
  }

  function onSuccess(formNode) {
    formNode.reset();
    centr_form.style.display = 'none';
    alert('Ваша заявка отправлена!')
    //formNode.classList.toggle('hidden')
  }

  function onError(error) {
    alert(error.message)
  }

  function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
  }  

  const get_consult = document.querySelector('.get_consult');
  get_consult.addEventListener('click', () => {
    centr_form.style.display = 'block';
  })
  
  centr_form.addEventListener('click', (e) => {
    if (e.target == centr_form) {
        centr_form.style.display = 'none';
    }
  });

  card_info_btn.addEventListener('click', () => {
    card_form.reset();
    centr_form.style.display = 'none';
  })
