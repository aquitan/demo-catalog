const toggleCatalogSidebarItem = () => {
    const items = document.querySelectorAll('.catalog-sidebar-item')

    items.forEach(item => {
        item.addEventListener('click', () => {
            console.log('adfasdf', item)
            if (item.children.length > 1) {
                item.classList.toggle('catalog-sidebar-subitems-active')
            }
            else {
                return
            }
        })
    })
}

toggleCatalogSidebarItem()

var swiper = new Swiper(".mySwiperCatalogCard", {
    pagination: {
      el: ".swiper-pagination",
    },
    spaceBetween: 10
  });
// const togleItemTimePicker = (hide = false) => {

//     const dateInput = document.querySelector('.item-callback-date')
//     const timeInput = document.querySelector('.item-callback-time')

//     dateInput.addEventListener('focus', () => {
//         dateInput.setAttribute('type', 'date')
//     })
//     timeInput.addEventListener('focus', () => {
//         timeInput.setAttribute('type', 'time')
//     })

//     if (hide) {
//         dateInput.setAttribute('type', 'text')
//         timeInput.setAttribute('type', 'text')
//     }

// }

// togleItemTimePicker()



let date = new AirDatepicker('#input', {
    timepicker: true,
    minHours: 8,
    maxHours: 16,
    minutesStep: 5,
    weekends: [6, 0]
});

console.log('date', date)
const toggleMobileMenu = () => {
    const burger = document.querySelectorAll('.burger')
    const mobileMenu = document.querySelector('.mobile-menu')
    const body = document.body

    burger.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.toggle('mobile-menu-active')
            burger.forEach(burgerMenu => {
                burgerMenu.classList.toggle('burger-active')
            })
            body.classList.toggle('fixed-body')
        })
    })
}

toggleMobileMenu()

const toggleSubmenuItem = () => {
    const items = document.querySelectorAll('.mobile-menu-item')

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (item.children.length > 1) {
                item.classList.toggle('mobile-subitems-active')
            }
            else {
                return
            }
        })
    })
}

toggleSubmenuItem()
const toggleModal = () => {
    let modal = document.querySelector('.dialog')
    let callbackBtn = document.querySelector('.block-menu-number')
    let genCloseBtn = document.querySelector('.gen-modal-close')

    callbackBtn.addEventListener('click', () => {
        modal.showModal()
    })

    modal.addEventListener("click", e => {
        const dialogDimensions = modal.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          modal.close()
          togleModalTimePicker(true)
        }
      })
}

toggleModal()

const togleModalTimePicker = (hide = false) => {
    const pickTimeBtn = document.querySelector('.dialog-time-toggle')
    const timeContainer = document.querySelector('.dialog-toggle-container')

    const dateInput = document.querySelector('.dialog-date')
    const timeInput = document.querySelector('.dialog-time')

    pickTimeBtn.addEventListener('click', () =>{
        pickTimeBtn.classList.add('dialog-time-toggle-hide')
        timeContainer.classList.add('dialog-toggle-container-show')

        dateInput.addEventListener('focus', () => {
            dateInput.setAttribute('type', 'date')
        })
        timeInput.addEventListener('focus', () => {
            timeInput.setAttribute('type', 'time')
        })
    })

    if (hide) {
        pickTimeBtn.classList.remove('dialog-time-toggle-hide')
        timeContainer.classList.remove('dialog-toggle-container-show')
        dateInput.setAttribute('type', 'text')
        timeInput.setAttribute('type', 'text')
    }

}

togleModalTimePicker()
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

const checkdataCount = () => {
	const countAttrs = document.querySelectorAll('.top-block-icon')

	countAttrs.forEach(item => {
		const attr = item.getAttribute('data-count')
		if (Number(attr) <= 0) {
			item.classList.add('hide-count')
		}

	})
}
checkdataCount()


const toggleCatalogMenu = () => {
	const catalogBtn = document.querySelector('.catalog-btn')
	const catalogMenu = document.querySelector('.catalog-menu ')

	catalogBtn.addEventListener('click', () => {
		catalogBtn.classList.toggle('catalog-btn-active')
		catalogMenu.classList.toggle('catalog-active')
	})


}
toggleCatalogMenu()


const checkOffsetTop = () => {
  const header = document.querySelector('.section-top-season')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-offset')
    } else {
      header.classList.remove('header-offset')
    }
  })
}

checkOffsetTop()

const checkOffsetTopMobile = () => {
  const header = document.querySelector('.scrolled-header-mobile')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled-header-mobile-active')
    } else {
      header.classList.remove('scrolled-header-mobile-active')
    }
  })
}

checkOffsetTopMobile()
const closeCallbackSuccess = () => {
    let layout = document.querySelector('.item-callback-success-layout')
    let close = document.querySelector('.callback-success-close')

    close.addEventListener('click', () => {
        layout.classList.remove('callback-success-active')
    })
}

closeCallbackSuccess()

const openCallbackSuccess = () => {
    let layout = document.querySelector('.item-callback-success-layout')
    let btn = document.querySelector('.item-callback-form__btn')

    btn.addEventListener('click', () => {
        layout.classList.add('callback-success-active')
    })
}

openCallbackSuccess()
