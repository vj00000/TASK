import Image from 'next/image';
export default function Header() {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        {/* <div className="container"> */}
          <Image
            src="/RuDo_Logo.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        {/* </div> */}
      </div>
    </header>
  );
}
