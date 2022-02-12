import Image from "next/image";

function Header() {
  return <div>
      <div className="flex justify-between max-w-6xl">

      {/* Header Left */}
      <div className="relative hidden lg:inline-grid h-4 w-24">
      <Image
        src="https://blogger.googleusercontent.com/img/a/AVvXsEjV_zzS438UKyOuDC3Sqtq2etM-lbLNTSW8fZFL801UqXm47-U3KSYCuk5f52Urlk6GOzSjU-E7tG9LIod8GaTnze_pL2jBbsp9xhcqLaLO-NHSiiOC3ZhEUcseXd2FrUyYJPZMf1PApFYnZXTulVRJB4P6pL8Pa1T7LQ2di9UTXdLTccFCDK5jqdmb=s320"
        layout="fill"
        objectFit="contain"
        />
        </div>
        </div>
  </div>;
}

export default Header;
