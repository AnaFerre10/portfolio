

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/AF.png'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/folded.png'
    }
  }

