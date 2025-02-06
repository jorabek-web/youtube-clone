export const Container = ({className, children}) => {
    return (
      <div className={`max-w-[1580px] h-40 mx-auto ${className}`}>
          {children}
      </div>
    )
  }