import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({ simplified }) => {
  //03 we deconstruct simpliefied from homepage and set up a ternary that set count to be 10 if simplified is true or to be 100 if simplified is 100
  const count = simplified ? 10 : 100
  //03 we grab our data from useGetCryptosQuery and rename them cryptosList and also grab isFetching,we also pass count to our hook so we decide how many currency we display, we also pass count inside our cryptoApi
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  //03 we set this usestate and pass cryptosList.data.coins to acess the coins, don't know why with ?. instead of just .
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  console.log(cryptos)
  if (isFetching) return 'Loading...'
  return (
    <>
      <Row className='crypto-card-container' gutter={[32, 32]}>
        {/* we add the ? so that if cryptos is undefined we don't run into error */}
        {cryptos?.map((currency) => {
          return (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className='crypto-card'
              key={currency.id}
            >
              <Link to={`/crypto/${currency.id}`}>
                <Card
                  title={`${currency.rank}.${currency.name}`}
                  extra={
                    <img className='crypto-image' src={currency.iconUrl} />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Dayli Change: {millify(currency.change)} %</p>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Cryptocurrencies
