const CardList = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
      <div className="w-full p-4">
          {children}
      </div>
    )
  }
  
  export default CardList