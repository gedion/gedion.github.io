import { mount as mountMarketing } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

export default () => {
  const ref = useRef(null)
	useEffect(() => {
    mountMarketing(ref.current)
	}, [ref])
	return <div ref={ref} />
}
