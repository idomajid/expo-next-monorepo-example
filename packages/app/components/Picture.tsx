import React, { Component } from 'react'
import { View, Image } from 'react-native'

const Picture = (props) => (
  <Image style={props.style} source={props.source} />
)
export default Picture
