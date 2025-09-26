'use client'
import { BlipChat } from 'blip-chat-widget'
import { useEffect, useState } from 'react'
type tProps = {
  selection: string
  country: string
}

export default function Home({ selection, country }: tProps) {
  const [option, setOption] = useState<string | undefined>(undefined)
  const [appKey, setAppKey] = useState<string>('')
  const [contract, setContract] = useState<string>('')

  const authType = `${process.env.NEXT_PUBLIC_BLIP_AUTH_TYPE}`
  const userIdentity = new Date().getTime().toString()
  const userPassword = new Date().getTime().toString()
  useEffect(() => {
    switch (selection) {
      case 'ISO 9001':
        setOption('ISO 9001')
        break
      case 'Digital Trust':
        setOption('Digital Trust')
        break
      case 'Sustainability':
        setOption('Sustainability')
        break
      case 'Health and Safety':
        setOption('Health and Safety')
        break
      case 'System Management':
        setOption('System Management')
        break
      case 'Aerospace':
        setOption('Aerospace')
        break
      case 'Automotive':
        setOption('Automotive')
        break
      default:
        setOption('ISO 9001')
        break
    }
    switch (country) {
      case 'USA':
        setAppKey(`${process.env.NEXT_PUBLIC_BLIP_APP_KEY_USA}`)
        setContract('https://bsi.chat.blip.ai/')
        break
      case 'CANADA | EN':
        setAppKey(`${process.env.NEXT_PUBLIC_BLIP_APP_KEY_CAN_EN}`)
        setContract('https://bsi.chat.blip.ai/')
        break
      case 'CANADA | FR':
        setAppKey(`${process.env.NEXT_PUBLIC_BLIP_APP_KEY_CAN_FR}`)
        setContract('https://bsi.chat.blip.ai/')
        break
      case 'BRAZIL':
        setAppKey(`${process.env.NEXT_PUBLIC_BLIP_APP_KEY_BR}`)
        setContract('https://bsi.chat.blip.ai/')
        break
      case 'MEXICO':
        setAppKey(`${process.env.NEXT_PUBLIC_BLIP_APP_KEY_MX}`)
        setContract('https://bsi.chat.blip.ai/')
        break
      default:
        setAppKey(`${process.env.NEXT_PUBLIC_BLIP_APP_KEY_USA}`)
        setContract('https://bsi.chat.blip.ai/')
        break
    }
  }, [selection, country])
  useEffect(() => {
    console.log('option', option)
    console.log('appKey', appKey)
    console.log('selection', selection)
    console.log('country', country)
    console.log('contract', contract)
  }, [option, appKey, selection, country])
  useEffect(() => {
    if (!option || !appKey || !contract) return

    const existingChat = document.getElementById('blip-chat-container')
    if (existingChat) {
      existingChat.remove()
    }

    const container = document.createElement('div')
    container.id = 'blip-chat-container'
    document.body.appendChild(container)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/blip-chat-widget'
    script.async = true
    script.onload = () => {
      const blipClient = new BlipChat()
      blipClient
        .withAppKey(appKey)
        .withButton({ color: '#2A2A2A', icon: '' })
        .withAuth({
          authType,
          userIdentity,
          userPassword,
        })
        .withAccount({
          extras: {
            pageUrl: window.location.href,
            option,
          },
        })
        .withCustomStyle(
          ` #blip-chat-header {
            background-color: #D9DDDC !important;
            }
            .blip-chat-titles  {
              color: black !important
            }
            #blip-send-message {
            background-color: #4b4b4bff !important
            }
          `
        )
        .withCustomCommonUrl(contract)
        .withEventHandler(BlipChat.LOAD_EVENT, function () {
          blipClient.sendMessage({
            type: 'text/plain',
            content: 'Start',
            metadata: {
              '#blip.hiddenMessage': true,
            },
          })
        })
        .build()
    }
    document.body.appendChild(script)

    return () => {
      script.remove()
      container.remove()
    }
  }, [option, appKey, contract])

  return null
}
