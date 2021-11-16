const Profile = ({ profileName, profileUrl }) => {
    return <section className="secondary-navigation">
    <span className="user-avatar">
      <a href={profileUrl}>{ profileName }</a>
    </span>
  </section>
}

export default Profile;