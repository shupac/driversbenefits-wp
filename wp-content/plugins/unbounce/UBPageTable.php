<?php

class UBPageTable extends UBWPListTable
{

    private $item_scroll_threshold = 10;

    public function __construct($page_urls)
    {
        parent::__construct();

        $this->items = array_map(function ($url) {
            return array('url' => $url);
        }, $page_urls);

        $this->_column_headers = array(array('url' => 'Url'), array(), array());
    }

    protected function column_default($item, $column_name)
    {
        switch ($column_name) {
            case 'url':
                return "<a href=\"//${item[$column_name]}\" target=\"_blank\">${item[$column_name]}</a>";
            break;
            default:
                return $item[$column_name];
        }
    }

    protected function display_tablenav($which)
    {
    }

    protected function get_table_classes()
    {
        $super = parent::get_table_classes();

        if (count($this->items) > $this->item_scroll_threshold) {
            $super[] = 'ub-table-scroll';
        }

        return $super;
    }

    public function no_items()
    {
        _e('None of your Unbounce pages have been published to WordPress.');
    }
}
