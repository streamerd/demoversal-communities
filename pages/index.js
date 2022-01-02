import Head from 'next/head'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import MatrixBG from "../components/matrix.js";
import getWeb3 from '../utils/getWeb3';
import getBalance from '../utils/getBalance';

const supportedTokens = [
  {
    name: 'HYPE',
    symbol: 'HYPE',
    decimals: 18,
    address: '0x9a77eE1DACCc13674B047F967F863B5C8A9f6807',
  },
  {
    name: 'GIVE',
    symbol: 'GIVE',
    decimals: 18,
  }
]

const titles = {
  margin: '0px 20px',
  padding: '0px',
  fontSize: '1.5em',
}

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [selection, setSelection] = useState(false);
  const [user, setUser] = useState(false);
  const [accounts, setAccounts] = useState(null);
  const [balance, setBalance] = useState(false);
  const [hypeBalance, setHypeBalance] = useState(false);
  const [giveBalance, setGiveBalance] = useState(false);
  const [tokenAddresses, setTokenAddresses] = useState([]);
  const redPill = () => {
    getWeb3(true)
      .then((result) => {
        getBalance(result, '0x9a77eE1DACCc13674B047F967F863B5C8A9f6807')
          .then(balance => {
            // Activates a user
            setUser(true);
            setBalance(balance);
          });
      });
  };

  useEffect(() => {
    const checkConnection = async () => {

      // Check if browser is running Metamask
      let web3;
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      };
      

      // Check if User is already connected by retrieving the accounts
      web3.eth.getAccounts()
        .then(async (addr) => {

          setAccounts(addr);
          let address_array = [];
          for (let i = 0; i < addr.length; i++) {
            let balance = await web3.eth.getBalance(addr[i]);
            let tokenAddress = supportedTokens.map(token => {
              return {
                address: token.address,
                balance: web3.utils.fromWei(balance, 'ether'),
                symbol: token.symbol,
                decimals: token.decimals,
                name: token.name
              }
            });
            address_array.push(tokenAddress);
          }
          setTokenAddresses(address_array);
          // setUser(true);
          setLoading(false);
        });
    };
    checkConnection();
  }, []);

  if (loading) return 'Loading...';

  return (

    <>
      <div>
        <Head>
          <link
            rel="preload"
            href="/fonts/orange_kid.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
      </div>
      <>
        
        <div
          className={'matrix'}>
            {
              user &&
              <>
                <div style={{textAlign: 'center', marginBottom: 50}}>
                  {/* Display all the accounts and their balances */}
                  
                  {
                    accounts.map((account, index) => {
                      return (
                        <div
                          key={index}
                          className={'account'}>
                            
                          <div
                            className={'account-name'}>
                            Vault Account: <br />{account}
                          </div>
                          <br />
                          <div
                            className={'account-balance'}>
                              Balance: <br />
                            {tokenAddresses[index].map((token, index) => {
                              return (
                                <div
                                  key={index}
                                  className={'token-balance'}>
                                  {token.symbol}: {token.balance}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
                <Link href={'/gatekeeper'}><a className={'button'} href="">Enter Metaverse</a></Link>
              </>
            }

            {
              !user &&
              <>
            <h1>We've been waiting for you.</h1>
            <div className={'row'}>
              <div
                className={'button'}
                onClick={redPill}
              > Red Pill Me </div>
              <br />
            </div>
          </>
            }
          
        </div>
        
        
        </>
      </>
  );
}
