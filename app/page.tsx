'use client'
import dynamic from 'next/dynamic'
import styles from '../styles/page.module.css'
import { useState } from 'react'
import { Button } from '@mui/material'
const BlipChatClient = dynamic(() => import('../components/blipchat'), {
  ssr: false,
})

export default function Home() {
  const [selection, setSelection] = useState<string>('')
  const [country, setCountry] = useState<string>('BRAZIL')
  return (
    <div className={styles.page} id="corpo">
      <main className={styles.main}>
        <div style={{ fontSize: '25px' }}>Pick a Country:</div>
        <div
          style={{
            width: '560px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'space between',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${country === 'BRAZIL' ? '#45a26e' : 'black'}`,
              color: 'white',
              '&:hover': { backgroundColor: '#333' },
            }}
            onClick={() => setCountry('BRAZIL')}
          >
            BRAZIL
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${country === 'USA' ? '#45a26e' : 'black'}`,
              color: 'white',
              '&:hover': { backgroundColor: '#333' },
            }}
            onClick={() => setCountry('USA')}
          >
            USA
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: `${
                country === 'CANADA | EN' ? '#45a26e' : 'black'
              }`,
              color: 'white',
              '&:hover': { backgroundColor: '#333' },
            }}
            onClick={() => setCountry('CANADA | EN')}
          >
            CANADA | EN
          </Button>
          <Button
            variant="contained"
            disabled={true}
            sx={{
              backgroundColor: `${
                country === 'CANADA | FR' ? '#45a26e' : 'black'
              }`,
              color: 'white',
              '&:hover': { backgroundColor: '#333' },
            }}
            onClick={() => setCountry('CANADA | FR')}
          >
            CANADA | FR
          </Button>

          <Button
            variant="contained"
            disabled={true}
            sx={{
              backgroundColor: `${country === 'MEXICO' ? '#45a26e' : 'black'}`,
              color: 'white',
              '&:hover': { backgroundColor: '#333' },
            }}
            onClick={() => setCountry('MEXICO')}
          >
            MEXICO
          </Button>
        </div>
        <div>
          <p style={{ fontSize: '25px' }}>Select a Chatbot to Chat With:</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            justifyContent: 'center',
            // backgroundColor: "red",
            width: '600px',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: `${
                  selection === 'ISO 9001' ? '#45a26e' : 'black'
                }`,
                color: 'white',
                '&:hover': { backgroundColor: '#333' },
              }}
              onClick={() => setSelection('ISO 9001')}
            >
              ISO 9001
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: `${
                  selection === 'Digital Trust' ? '#45a26e' : 'black'
                }`,
                color: 'white',
                '&:hover': { backgroundColor: '#333' },
              }}
              onClick={() => setSelection('Digital Trust')}
            >
              Digital Trust
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: `${
                  selection === 'Sustainability' ? '#45a26e' : 'black'
                }`,
                color: 'white',
                '&:hover': { backgroundColor: '#333' },
              }}
              onClick={() => setSelection('Sustainability')}
            >
              Sustainability
            </Button>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: `${
                  selection === 'Health and Safety' ? '#45a26e' : 'black'
                }`,
                color: 'white',
                '&:hover': { backgroundColor: '#333' },
              }}
              onClick={() => setSelection('Health and Safety')}
            >
              Health and Safety
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: `${
                  selection === 'System Management' ? '#45a26e' : 'black'
                }`,
                color: 'white',
                '&:hover': { backgroundColor: '#333' },
              }}
              onClick={() => setSelection('System Management')}
            >
              System Management
            </Button>
            <Button
              disabled={country === 'BRAZIL' ? true : false}
              variant="contained"
              sx={{
                backgroundColor: `${
                  selection === 'Aerospace' ? '#45a26e' : 'black'
                }`,
                color: 'white',
                '&:hover': { backgroundColor: '#333' },
              }}
              onClick={() => setSelection('Aerospace')}
            >
              Aerospace
            </Button>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: `${
                  selection === 'Automotive' ? '#45a26e' : 'black'
                }`,
                color: 'white',
                '&:hover': { backgroundColor: '#333' },
              }}
              onClick={() => setSelection('Automotive')}
            >
              Automotive
            </Button>
          </div>
        </div>

        {selection ? (
          <>
            <div
              style={{
                fontSize: '25px',
              }}
            >
              <p>Click the chat icon to start the conversation... 👉</p>
            </div>
            <BlipChatClient selection={selection} country={country} />
          </>
        ) : (
          <div
            style={{
              height: '30px',
            }}
          ></div>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
