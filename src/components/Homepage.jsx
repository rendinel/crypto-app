import React from 'react'
//package that format number
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
//02 we import our hook with the data from crypto api
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News } from '../components'
//we deconstruct so we can write <Title> instead of <Typography.Title>
const { Title } = Typography

const Homepage = () => {
  //02 we grab data and isfetching from our hook
  //03 we pass 10 to useGetCryptosQuery so we display only 10 currency on the homepage
  const { data, isFetching } = useGetCryptosQuery(10)
  //if we check the data we can see what is returning from the api
  console.log(data)
  //02 to use our data we put them inside this var, .? used to open our obj like data.data.stats
  const globalStats = data?.data?.stats

  //02 if is fetching is true we return loading
  if (isFetching) return 'Loading...'
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          {/* 02 statistic is a selfclosing tag to which we pass 2 params the title and the value from our data from useGetCryptosQuery(), we use millify to format our data number when needed */}
          <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24h Volume'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          {' '}
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show More</Link>
        </Title>
      </div>
      {/* 03 we pass the simpliefied prop so that we can display only some cryptocurrencies and some news not all on the news,by default is true if we want we can set to be false simplified={false} */}
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          {' '}
          Latest Crypto News
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/news'>Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage
