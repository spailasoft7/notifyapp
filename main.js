import './style.css'

import { LocalNotifications } from '@capacitor/local-notifications'

document.querySelector('#app').innerHTML = `
  <div style="padding:20px">
    <h1>Notification Test</h1>
    <button id="notifyBtn">Send Notification</button>
  </div>
`

async function setupNotifications() {

  const permStatus =
    await LocalNotifications.requestPermissions()

  console.log('Permission:', permStatus)

}

setupNotifications()

document
  .querySelector('#notifyBtn')
  .addEventListener('click', async () => {

    try {

      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Spailã Test',
            body: 'Notifications are working!',
            id: 1
          }
        ]
      })

      alert('Notification sent!')

    } catch (err) {

      console.error(err)
      alert('Notification failed')

    }

  })
