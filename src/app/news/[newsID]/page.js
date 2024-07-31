export default function newsDetails() {
    return (
      <div className="flex flex-col justify-center items-center pl-20 pr-20 pb-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold pt-24 pb-10 text-center leading-tight">
          NEWS TITLE
        </h1>
        
        <img src="/images/home/news.jpg" className="w-full rounded-lg mb-10" alt="News Image" />
        
        <div className="text-justify text-lg leading-relaxed space-y-6">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sem purus sapien
            varius nascetur finibus maecenas dis. Ultrices commodo eleifend mollis
            venenatis torquent dolor eu ad. Imperdiet id nam malesuada fusce
            iaculis. Elit hac mi congue sit felis tincidunt venenatis id interdum.
            Quisque dapibus vestibulum hendrerit mattis eros ridiculus. Morbi
            laoreet nisl dapibus nostra aenean fermentum. Ex habitasse mus lacus
            auctor nibh netus.
          </p>
  
          <p>
            Phasellus tortor semper risus ligula aptent suscipit. Sed ultricies risus quam
            nisl gravida varius ligula interdum. Eget vehicula laoreet iaculis congue
            facilisis primis. Facilisi fringilla etiam dolor eleifend phasellus sed.
            Hendrerit erat quis aliquet maecenas euismod. Massa felis aenean mi pretium
            primis elementum ullamcorper. Ultricies phasellus nam posuere faucibus ac
            dapibus dapibus.
          </p>
  
          <p>
            Diam vehicula tempor dui dictumst arcu magnis non donec. Ut faucibus morbi non
            lorem sapien. Fringilla interdum vel cubilia, purus lacinia interdum nisl nullam
            donec. Tellus luctus sollicitudin viverra vivamus sapien ut orci pharetra. Litora
            class ultrices fringilla at commodo donec. Himenaeos nascetur eu penatibus nunc
            gravida sodales sapien. Accumsan dui mollis nisi ut enim cras. Dis nunc quisque
            himenaeos himenaeos ut erat et nascetur potenti.
          </p>
  
          <p>
            Parturient condimentum quis per sociosqu nibh elit eros hac habitant.
            Ullamcorper volutpat risus hac placerat, leo in pellentesque. Torquent cubilia
            porttitor dictumst sociosqu eu. Imperdiet vulputate pharetra consequat laoreet
            efficitur vitae.
          </p>
        </div>
  
        <div className="flex flex-col pt-10">
          <h2 className="text-2xl font-semibold mb-4">See More</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Related News 1</li>
            <li>Related News 2</li>
            <li>Related News 3</li>
          </ul>
        </div>
      </div>
    );
  }
  