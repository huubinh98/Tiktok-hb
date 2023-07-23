import classNames from 'classnames/bind';
import style from './Header.module.scss';
function Header() {
  const cx = classNames.bind(style);
  return (
    <header className={cx('wrapper')}>
      <h2 className={cx('content')}>Header</h2>
    </header>
  );
}

export default Header;
