const settings = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.2142 9.65676C24.5894 9.65676 23.5162 7.8005 24.8214 5.52368C25.5755 4.20399 25.126 2.52176 23.8063 1.76765L21.2974 0.331953C20.1518 -0.349642 18.6726 0.0564149 17.991 1.20208L17.8314 1.47761C16.5263 3.75443 14.38 3.75443 13.0603 1.47761L12.9007 1.20208C12.2482 0.0564149 10.7689 -0.349642 9.62329 0.331953L7.11444 1.76765C5.79475 2.52176 5.34519 4.2185 6.09929 5.53818C7.41898 7.8005 6.34583 9.65676 3.72096 9.65676C2.21275 9.65676 0.965576 10.8894 0.965576 12.4121V14.9645C0.965576 16.4727 2.19825 17.7199 3.72096 17.7199C6.34583 17.7199 7.41898 19.5761 6.09929 21.853C5.34519 23.1726 5.79475 24.8549 7.11444 25.609L9.62329 27.0447C10.7689 27.7263 12.2482 27.3202 12.9297 26.1746L13.0893 25.899C14.3945 23.6222 16.5408 23.6222 17.8604 25.899L18.02 26.1746C18.7016 27.3202 20.1808 27.7263 21.3264 27.0447L23.8353 25.609C25.155 24.8549 25.6045 23.1581 24.8504 21.853C23.5307 19.5761 24.6039 17.7199 27.2288 17.7199C28.737 17.7199 29.9841 16.4872 29.9841 14.9645V12.4121C29.9696 10.9039 28.737 9.65676 27.2142 9.65676ZM15.4676 18.4015C12.8717 18.4015 10.7544 16.2842 10.7544 13.6883C10.7544 11.0925 12.8717 8.97516 15.4676 8.97516C18.0635 8.97516 20.1808 11.0925 20.1808 13.6883C20.1808 16.2842 18.0635 18.4015 15.4676 18.4015Z"
        fill={fill}
      />
    </svg>
  )
}

export default settings
