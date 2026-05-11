import './style.css'

import { LocalNotifications } from '@capacitor/local-notifications'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Notification Test</h1>
    <button id="notifyBtn">Send Notification</button>
  </div>
`

async function setupNotifications() {
  const perm = await LocalNotifications.requestPermissions()

  console.log("Permission result:", perm)
}

setupNotifications()

document.querySelector('#notifyBtn').addEventListener('click', async () => {

  console.log("Button clicked")

  await LocalNotifications.schedule({
    notifications: [
      {
        title: "Spailã Test",
        body: "Notifications are working!",
        id: Date.now(),
        schedule: { at: new Date(Date.now() + 1000) }
      }
    ]
  })

})
